import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../Images/comingsoon.jpg';
import SpacexImage from '../Images/spacex1.png';
import TheCrimeMachineImage from '../Images/thecrimemachine.png';
import TodoListImage from '../Images/todolist1.png';
import Footer from '../Footer/Footer';
import './portfolio.css';




class Portfolio extends Component {
    render() {

        return (
            <>
                <Sidebar />
                <div className="site-main" id="portfolio-main">
                    <div className="site-main-inner">
                        <div className="main-section portfolio-section">
                            <h1 className="main-title">Portfolio</h1>

                            <p>See my works below. Unless stated otherwise in their description, <strong>all their back-end and front-end parts were completely done by me.</strong></p>

                            <div className="timeline portfolio-timeline">
                                <ul>
                                    <li className="timeline_element timeline_element--now project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text">Now</time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <div className="project-description">
                                                    <strong>open to co-operation on new/existing projects.</strong><br />
                                                    Looking for a full-stack dev willing to join your team?<br />
                                                    <Link to="/contact/">Contact me</Link>. I will answer you in ~24 hours.
                                            </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline_element project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text"></time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <a href="/budgetapp/" className="project-link">
                                                    <div className="project-title">Budget App</div>
                                                    <div className="project-subtitle"><strong>See what you’re spending, where you can save money, and track your bills:</strong></div>
                                                </a>
                                                <div className="project-description">

                                                    <ul>
                                                        <li>a platform for user, to manage their finances,</li>
                                                        <li> manage all your finances with ease.</li>
                                                    </ul>
                                                </div>

                                                <Link to="/budgetapp/" className="project-readmore button button-red">
                                                    More details
                                            </Link>

                                                <div className="project-technologies">
                                                    <div className="technologies-title">Technologies</div>
                                                    <ul className="tech-tags">
                                                        <li><a href='https://getbootstrap.com/'>Bootstrap</a></li>

                                                        <li><a href='https://reactjs.org/'>React</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="project-image">
                                                <Link to="/budgetapp/">
                                                    <img src={Image} alt="budgetapp" />
                                                </Link>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="timeline_element project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text"></time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <a href="/todolist/" className="project-link">
                                                    <div className="project-title">Todolist</div>
                                                    <div className="project-subtitle">
                                                        The best way to task out your day, week, month, or even year !!
                                                    </div>
                                                </a>
                                                <div className="project-description">
                                                    <p>
                                                        <strong>
                                                            With Todoist, you can keep track of everything – from simple errands like grocery shopping, to your most ambitious projects
                                                        </strong>
                                                    </p>

                                                    <p>
                                                        – so you can start getting things done and enjoy more peace-of-mind along the way.
                                                    </p>

                                                    <ol>
                                                        <li>
                                                            Responsive web application (React)
                                                        </li>
                                                        <li>
                                                            When you don’t have to worry about forgetting to-dos, you’ll feel more calm, in control and motivated to accomplish your goals
                                                        </li>
                                                        <li>
                                                            TodoList helps get all your tasks and thoughts out of your head and onto your to-do list anytime
                                                        </li>
                                                    </ol>
                                                </div>

                                                <Link to="/todolist/" className="project-readmore button button-red">
                                                    More details
                                            </Link>

                                                <div className="project-technologies">
                                                    <div className="technologies-title">Technologies</div>
                                                    <ul className="tech-tags">

                                                        <li>
                                                            <a href='https://reactjs.org/'>React</a>
                                                        </li>

                                                        <li>
                                                            <a href='https://nodejs.org/en/'>Node Js</a>
                                                        </li>

                                                        <li>
                                                            <a href='https://expressjs.com/'>Express</a>
                                                        </li>

                                                        <li>
                                                            <a href='https://graphql.org/'>GraphQL</a>
                                                        </li>

                                                        <li>
                                                            <a href='https://www.mongodb.com/'>Mongo DB</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="project-image">
                                                <Link to="/todolist/">
                                                    <img src={TodoListImage} alt="todolist" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="timeline_element project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text"></time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <a href="/qa-app/" className="project-link">
                                                    <div className="project-title">
                                                        Qa-App(Question & Answer)
                                                    </div>
                                                    <div className="project-subtitle">
                                                        Question App you may Ask Questions and receive Answers from distinct types of topics :
                                                    </div>
                                                </a>
                                                <div className="project-description">
                                                    <p>
                                                        The web application for all users who seek questions and answers various topics:
                                                    </p>

                                                    <ul>
                                                        <li>based on various categories i.e. Technology, Business, Puzzles, Sports, GK, and Entertainment;</li>
                                                        <li> Log in via auth0;</li>
                                                        <li>You can participate to Ask Questions or provide Answers while one the move;</li>
                                                        <li>… and a lot more.</li>
                                                    </ul>

                                                    <p>Technical wrap-up:</p>

                                                    <ul>
                                                        <li> Post rich content questions using text</li>
                                                        <li>Follow questions, people and topics that interests you</li>
                                                        <li>deployable to mobile stores as native app via Apache Cordova</li>
                                                    </ul>
                                                </div>

                                                <Link to="/qa-app/" className="project-readmore button button-red">
                                                    More details
                                            </Link>

                                                <div className="project-technologies">
                                                    <div className="technologies-title">Technologies</div>
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


                                            <div className="project-image">
                                                <Link to="/qa-app/">
                                                    <img src={Image} alt="qa-app" />
                                                </Link>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="timeline_element project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text"></time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <a href="/spacex/" className="project-link">
                                                    <div className="project-title">Space X</div>
                                                    <div className="project-subtitle">Space X is a fan made app for the hardcore Space X fan who doesn’t want to miss anything.</div>
                                                </a>
                                                <div className="project-description"><p>Space X data that shows past missions, success and failed attempts.</p>

                                                    <ul>
                                                        <li> Full notification history</li>
                                                        <li>Stats section for various SpaceX stats and info</li>
                                                        <li>Missions section for upcoming & past missions</li>
                                                    </ul>
                                                </div>

                                                <Link to="/spacex/" className="project-readmore button button-red">
                                                    More details
                                            </Link>

                                                <div className="project-technologies">
                                                    <div className="technologies-title">Technologies</div>
                                                    <ul className="tech-tags">

                                                        <li><a href='https://reactjs.org/'>React</a></li>

                                                        <li><a href='https://graphql.org/'>GrapQL</a></li>

                                                        <li><a href='https://www.apollographql.com/'>Apollo</a></li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="project-image">
                                                <Link to="/spacex/">
                                                    <img src={SpacexImage} alt="spacex" />
                                                </Link>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="timeline_element project">
                                        <div className="timeline_element-date">
                                            <time className="timeline_element-date-text"></time>
                                        </div>

                                        <div className="timeline_element-contents">
                                            <div className="project-text">
                                                <a href="/thecrimemachine/" className="project-link">
                                                    <div className="project-title">The Crime Machine</div>
                                                    <div className="project-subtitle">This is a app me and my team came up with at the CLT Hackathon, based on the data we were given</div>
                                                </a>
                                                <div className="project-description"><p>Our project was to create a crime data dashboard called “The Crime Machine” with a data table and some chart/graph visualizations then link to a map to display the information like a heat map based on the area:</p>

                                                    <ul>
                                                        <li>If you wanted to know the crime statistics of a area before residing. </li>
                                                        <li>Crime data is provided by the hackathon</li>
                                                        <li>This is a great tool for neighborhood watch organizations.</li>
                                                    </ul>

                                                    <p>Technical wrap-up:</p>

                                                    {/* <ol>
                                                        <li>Coming Soon.</li>
                                                    </ol> */}

                                                </div>

                                                <Link to="/thecrimemachine/" className="project-readmore button button-red">
                                                    More details Coming soon...
                                             </Link>

                                                <div className="project-technologies">
                                                    <div className="technologies-title">Technologies</div>
                                                    <ul className="tech-tags">
                                                        <li><a href='/'>Coming soon...</a></li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="project-image">
                                                <Link to="/thecrimemachine/">
                                                    <img src={TheCrimeMachineImage} alt="thecrimemachine" />
                                                </Link>
                                            </div>

                                        </div>
                                    </li>

   
                                </ul>
                            </div>
                        </div>
                        <Footer />

                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio;

