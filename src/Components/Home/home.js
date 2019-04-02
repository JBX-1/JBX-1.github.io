import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import './home.css'
// import Background from '../Images/img_2.jpg'





class Home extends Component {
    render() {
        const inlineStyle = {
            siteMain: {
                marginLeft: "25%",
                position: "relative"
            },
            siteMainInner: {
                position: "relative"
            },
            homeSectionInner: {
                marginLeft: "25%"
            },
            homeHeading: {
                fontSize: "4em",
                fontWeight: "500"
            },
            homeSubheading: {
                fontSize: "3em",
                fontWeight: "300",
                textTranform: "none"
            },
            homeButton: {
                marginTop: "3.25em",
                overflow: "hidden",
                fontSize: "2em",
            },
            homeButtonText: {
                // backgroundColor: "rgba(63, 3, 97, 0.529)",
                fontWeight: "400",
                display: "inline - block",
                padding: ".4em .8em",
                lineHeight: "1",
                marginRight: "1em",
                backgroundColor: "rgba(255, 255, 255, 0.602)",
                borderWidth: "3px",
                borderStyle: "solid",
                color: "teal"
            }
            // mainSection: {
            //     position: "relative",
            //     top: "0",
            //     bottom: "0",
            //     left: "0",
            //     right: "0",
            //     zIndex: "1",
            //     background: "url(" + Background + ") top center no- repeat #bababa",
            //     backgroundSize: "cover",
            //     webkitFontSmoothing: "antialiased",
            //     color: "#fff",
            //     paddingLeft: "110px",
            //     paddingTop: "130px",
            //     textShadow: "1px 1px 2px rgba(0, 0, 0, .6)",
            //     fontSize: "12px"
            // }
        }

        return (
            <div>
                <Sidebar />
                <div className="container" style={inlineStyle.siteMain}>
                    <div style={inlineStyle.siteMainInner}>
                        <div className="home-section" style={inlineStyle.mainSection}>
                            <div style={inlineStyle.homeSectionInner}>
                                <div style={inlineStyle.homeHeading}>
                                    Welcome, I'm Jonathan
                                 </div>
                                <div style={inlineStyle.homeSubheading}>
                                    <p> Full-STACK Software Engineer</p>
                                    <br />
                                    Front-End & Back-End Web Development
                                </div>
                                <div className="home-buttons" style={inlineStyle.homeButton}>
                                    <Link to="/portfolio/" className="button button-outline button-white" style={inlineStyle.homeButtonText}>Portfolio</Link>
                                    <br />
                                    <Link to="/skills" className="button button-outline button-white" style={inlineStyle.homeButtonText}>Skills &amp; offer</Link>
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

