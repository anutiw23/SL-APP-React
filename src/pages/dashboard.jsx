import React, { Component, useState, useEffect, useContext} from 'react'
import {BrowserRouter as Router, Route, Redirect  } from 'react-router-dom'
import  Header  from '../components/header'
import  Footer  from '../components/footer'
// import  SideNavbar  from '../components/side-navbar'
import Sidenav from '../components/sidenav'
import  MainContent  from '../components/main-content'
import { useSelector } from 'react-redux'
import * as apiService from '../services/apiService'

class Dashboard extends Component { 
    constructor(props){
        super(props);
        this.state= {
            processMenuList: "",
            userId:1, // this.props.uId,
            processid: this.props.processId,
            roleid:2,
        }
    }

    componentDidMount(){
       setTimeout(() => {
         this.getProcessMenus()
       },2000)
    }

    async getProcessMenus() {
        var currUrl= window.location.href.substring(1);
        var id = currUrl.split("=");
        let params= {
         processID: id[1],
         userID: this.state.userId,
        }
        let resProcess = await apiService.getProcessMenuByRole(params)
        this.setState({processMenuList: resProcess.data});
        // console.log(resProcess.data)
    };

    render() {
      return (
         <>
            <Header />
            <div id="layoutSidenav">
            {
                this.state.processMenuList ?   
                <Sidenav/>
                :""
            }
            <MainContent />  
            </div>
            <Footer />
         </>
      )
    }
}

export default Dashboard;