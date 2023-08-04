import React, {Component, Fragment } from 'react';
import { useSelector } from 'react-redux'
import * as apiService from '../services/apiService'

 class SideNavbar extends Component {
    constructor(props){
        super(props);
        this.state={
            menuList: this.props.menuList,
            menuHeader: '',
            roleId: this.props.roleId,
            header: [],
            hrlist: [],
            mainMenu: [],
            pageDetails:[],
        }
    }

    componentDidMount(){
        this.handleMenuList()
        setTimeout(() => {
           // console.log(this.state.pageDetails)
            let headerlist= [];
            this.state.header.map(hlist => 
                 headerlist.push(hlist.menuheader)
            )
           this.removeDuplicate(headerlist)
        },1000);
    }

    removeDuplicate(headerlist){
       let hlist=  headerlist.filter((item, index) => 
        headerlist.indexOf(item) === index);
        this.setState({hrlist:hlist})
    }

    handleMenuList(){
        let menus= this.state.menuList;
        for(var i=0; i< menus.length; i++){
            if(i == 0){
                this.setState({header: menus[i]})
            }else if(i == 1){
                this.setState({mainMenu: menus[i]})
            }else{
                this.setState({pageDetails: menus[i]})
            }
        }
    }

    render(){
       return (
        <>
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                    {
                        this.state.hrlist.map(list => 
                          <div className="nav accordion" id="accordionSidenav">
                            <div className="sidenav-menu-heading">{list}</div>
                            { this.state.mainMenu.map(mlist => 
                                (list == mlist.menuheader ) ? 
                                    <Fragment>
                                    <a className='nav-link collapsed' href='javascript:void(0);' data-bs-toggle='collapse' data-bs-target={'#collapsePages_' + mlist.menuID} aria-expanded='false' aria-controls='collapsePages'>
                                    <div className='nav-link-icon'><i data-feather='grid'></i></div>
                                    {mlist.menuname}
                                    <div className='sidenav-collapse-arrow'><i className='fas fa-angle-down'></i></div>
                                    </a>
                                    <div className='collapse' id={'collapsePages_' + mlist.menuID} data-bs-parent='#accordionSidenav'>
                                        <nav className='sidenav-menu-nested nav accordion' id='accordionSidenavPagesMenu'>
                                          {this.state.pageDetails.map(plist => 
                                            (mlist.menuID == plist.parentid) ?
                                             <a className='nav-link' href='!#'>{plist.menuname}</a>
                                            :""
                                           )}
                                        </nav>
                                    </div>
                                    </Fragment>
                                : ""
                            )}
                          </div>
                        )
                    }
                    </div>
                     {/* Sidenav Footer*/}
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
            </nav>
        </div>
       </>
    )
  }
}

export default SideNavbar;
