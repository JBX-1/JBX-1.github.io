import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Images from '../../Images/comingsoon.jpg'
import './spacex.css'



class SpaceX extends Component {

    render() {

        return (
            <>
                <Sidebar />
                <div className="site-main">
                    <div className="site-main-inner">
                        <div className="main-section project-section">
                            <h1 className="main-title">SpaceX</h1>
                            <h2 className="project-subtitle"><strong>Space X is a fan made app for the hardcore Space X fan who doesn’t want to miss anything !!</strong></h2>

                            <div className="project-descriptions">

                                <div className="project-description project-general_description">
                                    <p> <strong>Space X data that shows past missions, success and failed attempts:</strong></p>

                                    <p>In summary, what i built is:</p>

                                    <ul>
                                        <li> Full notification history</li>
                                        <li>Stats section for various SpaceX stats and info</li>
                                        <li>Missions section for upcoming & past missions</li>
                                    </ul>

                                </div>



                                <div className="project-description project-tech_description">



                                    <h5 className="technologies-title">Technologies used</h5>

                                    <ul className="tech-tags">
                                        <li><a href='https://reactjs.org/'>React</a></li>

                                        <li><a href='https://graphql.org/'>GrapQL</a></li>

                                        <li><a href='https://www.apollographql.com/'>Apollo</a></li>
                                    </ul>

                                </div>

                            </div>


                            <a href="/" className="button button-red">
                                <i className="fa fa-external-link"></i>
                                View online
                            </a>



                            <div className="project-image">

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                                <img src={Images} alt="spacex" />

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default SpaceX;


