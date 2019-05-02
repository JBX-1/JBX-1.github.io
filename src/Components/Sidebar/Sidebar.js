import React, { Component } from 'react';
import SideImage from './SidebarImage';
import SideNav from './SideNav';
import SideContacts from './SideContact';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        
        return (
            <aside id="site-sidebar">
                <div id="site-sidebar-inner">
                    <div id="container site-sidebar-inner-image">
                        <SideImage />
                    </div>
                    <div id="site-sidebar-inner-nav">
                        <SideNav />
                    </div>
                    <div id="site-sidebar-inner-contact">
                        <SideContacts />
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;


