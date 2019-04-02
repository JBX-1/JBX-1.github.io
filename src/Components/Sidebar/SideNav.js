import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './sidebar.css'



class SideNav extends Component {
    render() {
        const inlineStyle = {
            mainNav: {
                margin: "45px -40px",
                lineHeight: "30px",
                position: "relative",
                fontSize: "14px",
                texTransform: "uppercase",
                display: "block",
                padding: "0",
            },
            socialIcon: {
                float: "left"
            },
            ul: {
                listStyleType: "none",
            },
            li: {
                listStyleType: "none",
                fontSize: "17px",
                fontWeight: "600",
                color: "white"
            }
        }

        return (

            <nav style={inlineStyle.mainNav}>
                <div>
                    <ul style={inlineStyle.ul}>
                        <li><Link to="/portfolio" style={inlineStyle.li}>Portfolio</Link></li>
                        <li><Link to="/skills" style={inlineStyle.li}>Skills &amp; offer</Link></li>
                        <li><Link to="/contact/" style={inlineStyle.li}>Contact me</Link></li>
                        <li><Link to="/cv/" style={inlineStyle.li}>My CV</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideNav;