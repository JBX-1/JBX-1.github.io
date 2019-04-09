import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import './sidebar.css'



class SideContacts extends Component {
    render() {
        const inlineStyle = {
            block: {
                // marginTop: "45px",
                fontSize: "22px"
            },
            blockTitle: {
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                color: "rgba(255,255,255,.5)",
                // marginBottom: "px",
                // color:"white"
            },
            socialIcons: {
                color: "white",
                padding: "0",
                marginRight: ".3em",
                // margin: "10",
                display: 'inline-block',
                lineHeight: "1",
                // color:"#BB1E1E",
                margin: "10px"
            }
        }

        return (
            <div className="block block-social" style={inlineStyle.block}>
                <div className="block-title" style={inlineStyle.blockTitle}>Get in touch</div>
                <div>
                    <div style={inlineStyle.socialIcons}>
                        <a href="https://www.linkedin.com/in/jonathan-taylor-5a83b374/" title="linkedin: jhrefmpl">
                            <i className="fab fa-linkedin-in" style={inlineStyle.socialIcons}></i>
                        </a>
                        <a href="https://github.com/JBX-1" title="github: JB-X">
                            <i className="fab fa-github" style={inlineStyle.socialIcons}></i>
                        </a>
                        <a href="https://codepen.io/jbx-1/">
                            <i className="fab fa-codepen" style={inlineStyle.socialIcons}></i>
                        </a>
                        <a href="mailto:jtaylor.millennials@gmail.com">
                            <i className="icon fa fa-envelope" style={inlineStyle.socialIcons}></i>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}



export default SideContacts;