import React, { Fragment, useEffect, useState } from 'react'
import { getProcessMenuByRole } from '../services/apiService'
import { useGlobalContext } from '../context'

const Sidenav = () => {

    const {menuData}=useGlobalContext()

    const hrlist=[...new Set(menuData[1].map((item)=>item.menuheader))]

    return (
        <>
        <div id="layoutSidenav_nav"> 
            <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                    {
                        hrlist.map(list => 
                          <div className="nav accordion" id="accordionSidenav">
                            <div className="sidenav-menu-heading">{list}</div>
                            { menuData[1].map(mlist => 
                                (list == mlist.menuheader ) ? 
                                    <Fragment>
                                    <a className='nav-link collapsed' href='javascript:void(0);' data-bs-toggle='collapse' data-bs-target={'#collapsePages_' + mlist.menuID} aria-expanded='false' aria-controls='collapsePages'>
                                    <div className='nav-link-icon'><i data-feather='grid'></i></div>
                                    {mlist.menuname}
                                    <div className='sidenav-collapse-arrow'><i className='fas fa-angle-down'></i></div>
                                    </a>
                                    <div className='collapse' id={'collapsePages_' + mlist.menuID} data-bs-parent='#accordionSidenav'>
                                        <nav className='sidenav-menu-nested nav accordion' id='accordionSidenavPagesMenu'>
                                          {menuData[2].map(plist => 
                                            (mlist.menuID === plist.parentid) ? 
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

export default Sidenav