import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link, useHistory } from 'react-router-dom'
import  Header  from '../components/header'
import  Footer  from '../components/footer'
import  Dashboard  from './dashboard'

class ProcessList extends Component {
    constructor(props){
      super(props);
      this.state={
        processList: [],
        userId: 0
      }
    }

    componentDidMount(){
        this.setState({
            userId: this.props.location.state.uId,
            processList: this.props.location.state.processList
        })
    }

    handleConnectSLPR(Id){
        window.location.href = "/dashboard?id="+Id;
    }
    
    render(){
        return (
            <>            
            <Header />
            <div id="layoutAuthentication">
              <div id="layoutAuthentication_content">
                <main>
                    <div className="container-xl px-4">
                        <div className="row">
                        {
                         this.state.processList.map(prlist =>  
                            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-8 mt-4">
                                <div className="card text-center h-100">
                                    <div className="card-body px-5 pt-5 d-flex flex-column">
                                        <div>
                                            <div className="h5 text-primary">{prlist.ProcessName}</div>
                                            <p className="text-muted mb-1">Connect To The {prlist.ProcessName} Process</p>
                                        </div>
                                        <div className="icons-org-create align-items-center mx-auto mt-auto">
                                            <i className="icon-users" data-feather="users"></i>
                                            <i className="icon-plus fas fa-plus"></i>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent px-5 py-4">                                   
                                        <div className="small text-center">
                                          <button className="btn btn-block btn-primary" onClick={this.handleConnectSLPR.bind(this, prlist.ProcessID)}>Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             )
                          }
                        </div>
                    </div>
                </main>
                </div>
        </div>
        </>
        )
    }
}

export default ProcessList;