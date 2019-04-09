import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './home.css'
// import Background from '../Images/img_2.jpg'





class Home extends Component {
    render() {
        const inlineStyle = {
            siteMain: {
                marginLeft: "25%",
                position: "relative",
            },
            siteMainInner: {
                position: "relative",
            },
            homeSectionInner: {
                marginLeft: "25%",
                color: "black",
                marginTop: "150px"

            },
            homeHeading: {
                fontSize: "4em",
                fontWeight: "500"
            },
            homeSubheading: {
                fontSize: "3em",
                fontWeight: "300",
                textTranform: "none",
                textAlign: 'center',
            },
            mark: {
                backgroundColor: "rgb(127, 107, 153)",
                color: "white"
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
                                    Welcome, <mark style={inlineStyle.mark}> I'm Jonathan</mark>
                                    <br/>
                                    <div>a <mark style={inlineStyle.mark}> Full-STACK Software Engineer </mark></div>
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

