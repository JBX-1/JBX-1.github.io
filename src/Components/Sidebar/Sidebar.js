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
                backgroundColor: "rgb(127, 107, 153)"

            },
            siteSideBarInner: {
                position: "relative",
                height: "100%",
                overflowY: "auto",
                padding: "45px 40px",
                textAlign: 'center',
            },
            image: {
                marginTop: "5px",
                marginRight: "55px",
                marginBottom: "55px"
            },
            nav: {
                marginRight: "75px",
                marginBottom: "2px"
            },
            contact: {
                marginRight: "25px"
            }
        }
        return (
            <aside className="site-sidebar" style={inlineStyle.siteSidebar}>
                <div className="site-sidebar-inner" style={inlineStyle.siteSideBarInner}>
                    <div className="container" style={inlineStyle.image}>
                        <SideImage />
                    </div>
                    <div style={inlineStyle.nav}>
                        <SideNav />
                    </div>
                    <div style={inlineStyle.contact}>
                        <SideContacts />
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;


