import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import './skills.css'



class Skills extends Component {
    render() {

        return (
            <>
                <Sidebar />
                < div className="skills-main" >
                    <div className="skills-main-inner" id="skills-main">
                        <div className="main-section offer-section">
                            <h1 className="main-title">Skills &amp; offer</h1>

                            <p>I am a <strong>full-stack web developer</strong> with over <strong>two years of experience</strong>.</p>

                            <p>I have maintained, developed and launched <a href="/projects/">multiple projects</a> from scratch, carrying the development of its' back-end and front-end codebases.</p>

                            <p>My current toolset includes <span className="red">Javascript &amp; React Framework, MySQL &amp; NoSQL DB, Material UI, Node JS, Python, GraphQL, Express</span> and all the other various frameworks, libraries and technologies related to them.</p>

                            <p>Feel free to ask me any questions. I can help you in your project in all from the UI mockups, back-end and front-end web development to fixing the design and installing &amp; configuration of the application on staging/production enviroments.</p>

                            <p>
                                <em>I don't make excuses, I make solutions.</em>
                            </p>

                            <hr />

                            <h2 className="red">
                                <i className="fa fa-edit"></i>
                                Front-end Web development
                            </h2>

                            <p>
                                <strong>I specialize in applications written in <span className="red">React</span>.</strong>
                                Recently I became also a huge fan of one-way data flow and Redux-like architecture and also typed languages, e.g. TypeScript.
                            </p>

                            <p>
                                My current experience and skills in front-end include:
                            </p>
                            <ul>
                                <li>
                                    lead JavaScript development: bootstraping or refactoring an existing app architecture, by improving its' extensibility and reliability;
                                </li>
                                <li>
                                    full integration of front-end development using tools like <a href="https://webpack.js.org/" rel="nofollow">Webpack</a> with features like automatic code reload, code minifications, multiple environments support,
                                 </li>
                                <li>
                                    good sense of design and UX, by having some small past experience in graphic design
                                </li>
                                <li>
                                    knowledge and huge experience in many JS ecosystem, by using many libraries like React, jQuery, and whatever else was needed.
                                </li>
                                <li>
                                    <strong>You can already find some of my mobile applications in <a href="/projects/">my portfolio</a>.</strong>
                                </li>
                            </ul>

                            <div className="row features">
                                <div className="col col-12 feature">
                                    <div className="feature-icon feature-number">
                                        5
                                     </div>
                                    <div className="feature-description">
                                        single page applications done completely in React
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <h2 className="red">
                                <i className="fa fa-code"></i>
                                Back-end Web development
                            </h2>

                            <p>
                                <strong>In back-end development, my current stack involves <a href="https://es6.io/" rel="nofollow">Express</a> and <a href="https://www.javascript.com/" rel="nofollow">Javascript Framework</a></strong>, and alternatively <a href="https://graphql.org/" rel="nofollow">GraphQL</a> or <a href="http://nodejs.org/" rel="nofollow">NodeJS</a>.
                             </p>
                            <p>
                                Nearly every app I have done in the past had the back-end written also by me. In order to improve the development speed, performance and reliability.
                             </p>
                            <p>
                                Luckily, my experience and lessons I learned while doing all those apps, will stay with me and be useful forever, no matter what framework I will use in the next project.
                            </p>

                            <p>
                                What I can do is:
                            </p>

                            <ul>
                                <li>
                                    lead development of web apps in MERN STACK
                                </li>
                                <li>
                                    cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers
                                </li>
                                <li>
                                    using different types of databases (like <a href="https://www.mongodb.com/" rel="nofollow">MongoDB</a>, <a href="http://www.mysql.com/" rel="nofollow">MySQL</a>)
                                </li>
                                <li>
                                    dividing the servers into different machine nodes / docker containers; database sharding; load balancing
                                </li>
                                <li>
                                    refactoring existing applications, by improving code readibility, separating concerns into separate functions and classNamees, splitting out the business logic from app's views and controllers (<a href="https://en.wikipedia.org/wiki/Domain-driven_design" rel="nofollow">DDD</a>), and moving the app architecture into more event-based one
                                 </li>
                                <li>
                                    writing unit and e2e tests
                                </li>
                            </ul>

                            <hr />

                            <h2 className="red">
                                <i className="fa fa-terminal" aria-hidden="true"></i>
                                What about design, UI ?
                            </h2>

                            <p><strong>Thus, not only I have coded their back-end and front-end code, but often I also had to care about other things needed in a successful web application:</strong></p>

                            <ul>
                                <li>
                                    good planning of UI and thinking how it affects the UX;
                                </li>
                                <li>
                                    consistency in design and typography;
                                </li>
                                <li>
                                    search engine optimization;
                                </li>
                                <li>
                                   familiar with deploying to the server (e.g. using <a href="https://www.docker.com/" rel="nofollow">Docker</a>) and  monitor its’ processes to avoid downtimes.
                                </li>
                            </ul>

                            <hr />

                            <p>
                                If your initial thought is that I just can’t be the best one in everything, it's okay. Just send the UI &amp; design job to someone else, and I can take care of all the code development.
                            </p>

                            <p>
                                <strong>Of course I do not always work alone.</strong> If you already have an existing team for your project, but still need someone to help it, contact me. I’ll fit into your needs.
                            </p>
                        </div>

                    <Footer />
                    </div>
                </div>
            </>
        )
    }
}


export default Skills

