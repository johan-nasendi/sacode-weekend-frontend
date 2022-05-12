import React from 'react'
import {
   SidebarContainer, 
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   SidebarBtnWrap,
   SidebarRoute,
   Icon,
   CloseIcon
    } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                    <SidebarLink to='service' onClick={toggle}> What To Learn </SidebarLink>
                    <SidebarLink to='activity' onClick={toggle}> Activity </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}> Discover </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
