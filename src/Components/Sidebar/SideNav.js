import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './sidebar.css'



class SideNav extends Component {
    render() {
        const inlineStyle = {
            // mainNav: {
            //     margin: "45px -40px",
            //     lineHeight: "30px",
            //     position: "relative",
            //     fontSize: "14px",
            //     texTransform: "uppercase",
            //     display: "block",
            //     textAlign: "center"
            // },
            // socialIcon: {
            //     float: "left"
            // },
            ul: {
                listStyleType: "none",
                // padding: "100px",
                // margin: "100p"

            },
            li: {
                listStyleType: "none",
                fontSize: "17px",
                fontWeight: "600",
                color: "white", 
                margin: "20px",

            },
            aTag: {
                color: "white"
            }
        }

        return (

            <nav className= "block main-navigation">
                <div>
                    <ul style={inlineStyle.ul}>
                        <li style={inlineStyle.li}><Link to="/projects" style={inlineStyle.aTag}>Portfolio</Link></li>
                        
                        <li style={inlineStyle.li}><Link to="/skills" style={inlineStyle.aTag}>Skills</Link></li>
                        <li style={inlineStyle.li}><Link to="/cv/" style={inlineStyle.aTag} target="_blank">My CV</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideNav;