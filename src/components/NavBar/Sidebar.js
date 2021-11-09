import React from 'react'
import {SidebarMenu, Icon, CloseIcon, SidebarItems, SidebarLink, SidebarBtnLink, SidebarWrap, SidebarBtn} from './Sidebar.style'

function Sidebar( {openSbar, changeState_Sbar} ) {
    return (
        <SidebarMenu openSbar={openSbar} onClick={changeState_Sbar} >
            <Icon onClick={changeState_Sbar}>
                <CloseIcon />
            </Icon>
            <SidebarWrap>
                <SidebarItems>
                    <SidebarLink to="/" onClick={changeState_Sbar}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/Shop" onClick={changeState_Sbar}>
                        Shop
                    </SidebarLink>
                    <SidebarLink to="/AboutUs" onClick={changeState_Sbar}>
                        About us
                    </SidebarLink>
                    <SidebarLink to="/Contact" onClick={changeState_Sbar}>
                        Contact
                    </SidebarLink>
                    <SidebarLink to="/Cart" onClick={changeState_Sbar}>
                        Cart
                    </SidebarLink>
                </SidebarItems>
                <SidebarBtn>
                    <SidebarBtnLink to="/LogIn" onClick={changeState_Sbar}>Sign In</SidebarBtnLink>
                </SidebarBtn>
            </SidebarWrap>
        </SidebarMenu>
    )
}

export default Sidebar
