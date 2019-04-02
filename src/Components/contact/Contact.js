import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import './contact.css'



class Contact extends Component {
    render() {

        return (
            <>
                <Sidebar />
                < div className="site-main" >
                    <div className="site-main-inner">
                        <div className="main">
                            <h1 className="main-title">Contact me</h1>

                            <p>I am available for hire and open to any ideas of cooperation.</p>

                            <div className="vcard">
                                <dl className="dl dl-vertical">
                                    <dt>E-mail:</dt>
                                    <dd>
                                        <a href="mailto:jtaylor.millennials@gmail.com"><i className="icon fa fa-envelope"></i> jtaylor.millennial@gmail.com</a>
                                    </dd>

                                    <dt>&nbsp;</dt>
                                    <dd></dd>

                                    <dt>LinkedIn:</dt>
                                    <dd>
                                        <a href="https://www.linkedin.com/in/jonathan-taylor-5a83b374/"><i className="icon fa fa-linkedin"></i> Jonathan Taylor</a>
                                    </dd>

                                    <dt>Github:</dt>
                                    <dd>
                                        <a href="https://github.com/JBX-1"><i className="icon fa fa-github"></i> jb-x</a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                        <Footer />
                </div >

            </>
        )
    }
}


export default Contact




