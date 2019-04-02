import React, { Component } from 'react';
import Image from '../Images/comingsoon.jpg'
import './cv.css'


class Cv extends Component {
    render() {
        return (
            <div className="cv-page">
                <div className="cv-page-inner">

                    <div className="cv-section cv-header">
                        <div className="cv-header-avatar">
                            <img src={Image} alt="avatar" />
                        </div>
                        <div className="cv-header-text">
                            <h1 className="cv-header-name">Jonathan Taylor</h1>
                            <h2 className="cv-header-subname">Full-stack Web Developer</h2>
                            <div className="cv-header-lead">
                                Self-motivated software engineer with two years experience developing MERN STACK. Fluent in Javascript-and other Object-Oriented Programming languages. Really enjoy all aspects of Programming, launching and teaching others.<br />
                                <br />
                                <strong>Willing to relocate to: Australia, New Zealand, Europe, Asia, South America, Kraków, Spain, or can work remotely.</strong><br />
                                
                  </div>
                        </div>
                        <div className="cv-header-meta">
                            <div className="cv-header-meta-right">
                                <div className="cv-header-meta-row">
                                    <a href="mailto:jtaylor.millennials@gmail.com">jtaylor.millennials@gmail.com</a>
                                </div>
                                <div className="cv-header-meta-row">
                                    +980 250 3179
                                </div>
                                <div className="cv-header-meta-row">
                                    <a href="/">www.jtaylor.me</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Experience</h3>
                        <div className="cv-section-content">
                            <div className="cv-timeline">
                                <div className="cv-timeline-row">
                                    <div className="cv-timeline-side">
                                        <div className="cv-timeline-company">Freelance</div>
                                        <div className="cv-timeline-date">5/2018 - Currently</div>
                                        <a href="/">jtaylor.me</a>
                                    </div>
                                    <div className="cv-timeline-body">
                                        <h4 className="cv-timeline-position">Full-stack Web Developer</h4>
                                        <p>Self-driven web development for remote clients.</p>
                                        <ul>
                                            <li>Created and launched multiple web applications,front-end and back-end programming, UI/UX design, maintenance and project management. (see <a href="/">jtaylor.me/portfolio</a>)</li>
                                            <li>Mentored several developers.</li>
                                            <li>Built projects in MERN STACK. (see <a href="https://jtaylor.me/portfolio">jtaylor.me/portfolio</a>)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="cv-timeline-row">
                                    <div className="cv-timeline-side">
                                        <div className="cv-timeline-company">National Mentor Health Care</div>
                                        <div className="cv-timeline-date">5/2016 - 2/2019</div>
                                        <a href="https://www.thementornetwork.com/">thementornetwork.com</a>
                                    </div>
                                    <div className="cv-timeline-body">
                                        <h4 className="cv-timeline-position">Lead Help Desk Technician</h4>
                                        <p>The MENTOR Network is a national network of local health and human services providers in more than 36 states offering an array of quality, community-based services .</p>
                                        <ul>
                                            <li>Worked closely with field IT, infrastruture, business systems, and telecom in resolving IT technical request from users located throughout 36 states.</li>
                                            <li>Responded to and resolved IT requests via phone, email, and walk-ins.</li>
                                            <li>Tracked and notated customer requests through an incident management tool, reflecting through troubleshooting processes.</li>
                                        </ul>
                                    </div>
                                </div><div className="cv-timeline-row">
                                    <div className="cv-timeline-side">
                                        <div className="cv-timeline-company">United States Postal Service</div>
                                        <div className="cv-timeline-date">1/2012 - 8/2016</div>
                                        <a href="https://www.usps.com/">usps.com</a>
                                    </div>
                                    <div className="cv-timeline-body">
                                        <h4 className="cv-timeline-position">City Carrier</h4>
                                        <p>A self-supporting, independent federal agency, the U.S. Postal Service is the only delivery service that reaches every address in the nation.</p>
                                        <ul>
                                            <li>Employed the USPS system to generate scheduled delivery routes for mail and parcels to businesses and residences at a timely manner.</li>
                                            <li>Provided assistance to other City Carriers whom were unable to completed their tasks.</li>
                                            <li>Handled and sorted confidential packages, mail, information using secure methods .</li>
                                            <li>Deliver packages and mail to businesses and people in towns, cities, and rural areas, at fast pace.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Skills</h3>
                        <div className="cv-section-content cv-section-content--indented">
                            <ul className="cv-tech-tags tech-tags">
                                <li><a rel="nofollow" target="_blank">React</a></li>
                                <li><a rel="nofollow" target="_blank">JavaScript</a></li>
                                <li><a rel="nofollow" target="_blank">Mongo DB</a></li>
                                <li><a rel="nofollow" target="_blank">Node JS</a></li>
                                <li><a rel="nofollow" target="_blank">Es6</a></li>
                                <li><a rel="nofollow" target="_blank">UX</a></li>
                                <li><a rel="nofollow" target="_blank">Heroku &amp; Firebase</a></li>
                                <li><a rel="nofollow" target="_blank">JQuery</a></li>
                                <li><a rel="nofollow" target="_blank">MySQL</a></li>
                                <li><a rel="nofollow" target="_blank">Rest API</a></li>
                                <li><a rel="nofollow" target="_blank">.NET</a></li>
                                <li><a rel="nofollow" target="_blank">C / C++</a></li>
                                <li><a rel="nofollow" target="_blank">Python</a></li>
                                <li><a rel="nofollow" target="_blank">GraphQL</a></li>
                                <li><a rel="nofollow" target="_blank">Apollo</a></li>
                                <li><a rel="nofollow" target="_blank">Hadoop</a></li>
                                <li><a rel="nofollow" target="_blank">Apache</a></li>
                                <li><a rel="nofollow" target="_blank">Tech &amp; customer support</a></li>
                                <li><a rel="nofollow" target="_blank">Problem-Solving</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Education</h3>
                        <div className="cv-section-content">
                            <div className="cv-timeline">
                                <div className="cv-timeline-row">
                                    <div className="cv-timeline-side">
                                        <div className="cv-timeline-company">University of North Carolina at Charlotte </div>
                                        <div className="cv-timeline-date">Jun, 2018 - Dec, 2018</div>
                                        <a href="http://put.poznan.pl">put.poznan.pl</a>
                                    </div>
                                    <div className="cv-timeline-body">
                                        <div className="cv-timeline-position">Certificate from Coding Bootcamp</div>
                                        <ul>
                                            <li>Served as a Lead on <a href="#">Team Tesla</a>, which was the name of my team in the bootcamp.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Other perks</h3>
                        <div className="cv-section-content cv-section-content--indented">
                            <ul>
                                <li>I enjoy hiking, traveling and enjoying the nature.</li>
                                <li>Currently studying Computer Science, and Learning Algorithms.</li>
                                <li>Received "All conference" award upon graduating high school, playing football.</li>
                                <li>I also Attend Hackathons.</li>
                                <li>I speak native English, conversational Spanish.</li>
                                <li>Lead a Chess team in middle. Also a learning golf.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cv;

