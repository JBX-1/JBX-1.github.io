import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './home.css'
// import Background from '../Images/img_2.jpg'





class Home extends Component {
    render() {

        return (
            <div className="main">
            <div className="sidebar-container">
                <Sidebar />
            </div>
                <div className="container site-main">
                    <div className="site-main=inner" >
                        <div className="home-section site-main" l>
                            <div className="home-section-inner">
                                <div className="home-section-heading">
                                    Welcome, <mark> I'm Jonathan</mark>
                                    <br/>
                                    <div>a <mark> Full-STACK Software Engineer </mark></div>
                                    <div>doing Frontend & Backend</div>
                                    <div>Development</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

