import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [menuData,setMenuData]=useState([])
    const SL_App_URL='https://slapps.southindia.cloudapp.azure.com/configapi/';

    const fetchMenuData=async ()=>{
        try {
            const {data}=await axios.post('https://slapps.southindia.cloudapp.azure.com/configapi/api/SignIn/GetProcessRoleWiseMenu',{
                processID:'1',
                userID:2
            })
            console.log(data)
            setMenuData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchMenuData()
    },[])

    return (
        <AppContext.Provider value={{ menuData }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }