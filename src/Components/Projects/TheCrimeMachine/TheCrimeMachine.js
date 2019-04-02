import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Images from '../../Images/comingsoon.jpg'
import './thecrimemachine.css'



class TheCrimeMachine extends Component {

    render() {

        return (
            <>
                <Sidebar />
                <div className="site-main">
                    <div className="site-main-inner">
                        <div className="main-section project-section">
                            <h1 className="main-title">The Crime Machine</h1>
                            <h2 className="project-subtitle"><strong>This is a app me and my team came up with at the CLT Hackathon, based on the data we were given!!</strong></h2>

                            <div className="project-descriptions">

                                <div className="project-description project-general_description">
                                    <p> <strong>Our project was to create a crime data dashboard called “The Crime Machine” with a data table and some chart/graph visualizations then link to a map to display the information like a heat map based on the area:</strong></p>

                                    <p>In summary, what i built is:</p>

                                    <ul>
                                        <li>If you wanted to know the crime statistics of a area before residing. </li>
                                        <li>Crime data is provided by the hackathon</li>
                                        <li>This is a great tool for neighborhood watch organizations.</li>
                                    </ul>

                                </div>



                                <div className="project-description project-tech_description">



                                    <h5 className="technologies-title">Technologies used</h5>

                                    <ul className="tech-tags">
                                        <li><a href='/'>Coming soon....</a></li>

                                    </ul>

                                </div>

                            </div>


                            <a href="/" className="button button-red">
                                <i className="fa fa-external-link"></i>
                                View online Coming soon...
                            </a>



                            <div className="project-image">

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                                <img src={Images} alt="thecrimemachine" />

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default TheCrimeMachine;


