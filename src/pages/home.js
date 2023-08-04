import React, { Component, useState, useEffect, createContext, useContext } from 'react'
import { signoutRedirect } from '../services/userService'
import { useSelector } from 'react-redux'
import * as apiService from '../services/apiService'
import { prettifyJson } from '../utils/jsonUtils'
import { Route, Redirect  } from 'react-router-dom'
import ErrorPage from './errorpage'

function Home() {
  const user = useSelector(state => state.auth.user)
  const [userId, setuserId] = useState(0)
  const [processList, setProcessList] = useState([])
  const [processLoaded, setProcessLoaded] = useState(false)
  const [processId, setProcessId] = useState(0)

  function signOut() {
    signoutRedirect()
  }

  async function getUserData() { 
    let emailId= user.profile.name;
    const resUserDetails= await apiService.getUserDetails(emailId)
    if(resUserDetails.length == 1){
      setProcessLoaded(true)  
      setuserId(resUserDetails[0].UserID)
    }else{
      setProcessLoaded(false)  
    }
  }

  async function getProcessByUserId() {
    let uid= 1; // userId; //for default userid is 1 to access more than one process list
    const resProcess = await apiService.getProcessByUserId(uid)
    setProcessList(resProcess)
    if(resProcess.length == 1){
      setProcessLoaded(true)  
      setProcessId(resProcess[0].ProcessID)
    }
  };

useEffect(() => {
    getUserData()
    getProcessByUserId()
 });

var redirector= null;
if(processLoaded){
    if(processList !="" && processList.length > 1 ){
       redirector= <Redirect to={
       {pathname: '/process-list', state: {'uId':userId, 'processList':processList}}}  />
    }else if(processList !="" && processList.length == 1 ){
       redirector= <Redirect to={'/dashboard?id='+processId } />  
    }
}else{
  redirector = <ErrorPage />
}

return(
   <div>
     { redirector }  
   </div>
)

}

export default Home