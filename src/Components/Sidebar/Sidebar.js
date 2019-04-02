import React, { Component } from 'react';
import SideImage from './SidebarImage';
import SideNav from './SideNav';
import SideContacts from './SideContact';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        const inlineStyle = {
            siteSidebar: {
                top: "0",
                bottom: "0",
                left: "0",
                position: "fixed",
                overflow: "hidden",
                zIndex: "2",
                width: "25%",
                fontSize: "14px",
                color: "#fff",
                textAlign: "left",
                backgroundColor: "rgba(63, 3, 97, 0.529)"

            },
            siteSideBarInner: {
                position: "relative",
                height: "100%",
                overflowY: "auto",
                padding: "45px 40px"
            }
        }
        return (
            <aside className="site-sidebar" style={inlineStyle.siteSidebar}>
                <div className="site-sidebar-inner" style={inlineStyle.siteSideBarInner}>
                    <SideImage />
                    <SideNav />
                    <SideContacts />
                </div>
            </aside>
        )
    }
}

export default Sidebar;


