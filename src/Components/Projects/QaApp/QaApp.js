import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Images from '../../Images/comingsoon.jpg'
import './QaApp.css'



class QaApp extends Component {

    render() {

        return (
            <>
                <Sidebar />
                <div className="project-main">
                    <div className="project-main-inner">
                        <div className="main-section project-section">
                            <h1 className="main-title">Qa-App(Question & Answer)</h1>
                            <h2 className="project-subtitle"><strong>The best way to task out your day, week, month, or even year !!</strong></h2>

                            <div className="project-descriptions">

                                <div className="project-description project-general_description">
                                    <p><strong>Question App you may Ask Questions and receive Answers from distinct types of topics :</strong></p>

                                    <p> The web application for all users who seek questions and answers various topics:</p>

                                    <p>In summary, what we built is:</p>

                                    <ul>
                                        <li>based on various categories i.e. Technology, Business, Puzzles, Sports, GK, and Entertainment;</li>
                                        <li> Log in via auth0;</li>
                                        <li>You can participate to Ask Questions or provide Answers while one the move;</li>
                                        <li>… and a lot more.</li>
                                    </ul>

                                </div>



                                <div className="project-description project-tech_description">



                                    <h5 className="technologies-title">Technologies used</h5>

                                    <ul className="tech-tags">

                                        <li><a href='https://reactjs.org/'>React</a></li>
                                        <li><a href='https://expressjs.com/'>Express</a></li>

                                        <li><a href='https://www.npmjs.com/package/axios'>axios</a></li>
                                        <li><a href='https://www.npmjs.com/package/helmet'>helmet</a></li>
                                        <li><a href='https://www.npmjs.com/package/cors'>cors</a></li>
                                        <li><a href='https://www.npmjs.com/package/morgan'>morgan</a></li>
                                        <li><a href='https://auth0.com/'>Auth0</a></li>
                                    </ul>

                                </div>

                            </div>


                            <a href="/home" className="button button-red">
                                <i className="fa fa-external-link"></i>
                                View online
                            </a>



                            <div className="project-image">

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                                <img src={Images} alt="qa-app" />

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default QaApp;


