import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Image from '../Images/comingsoon.jpg'
// import './sidebar.css'



class SideImage extends Component {
    render(){
        const inlineStyle = {
            img: {
                textAlign: "center",
                textDecoration: "none",
                display: "block",
                color: "inherit"
            },
            personAvatar: {
                borderRadius: "50%",
                marginBottom: "10px"
            },
            avatar: {
                width: "175px",
                height: "175px",
                borderRadius: "50%", 
            },
            avatarContent: {
                marginLeft: "-40px",
                marginRight: "-40px"
            },
            avatarTitle: {
                fontSize: "22px",
                fontWeight: "600",
                textTransform: "uppercase",
                margin: "0",
                display: "block",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em"
            },
            avatarSubtitle: {
                fontSize: "20px",
                fontWeight: "600",
                textTransform: "uppercase",
                margin: "0",
                display: "block",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px"
            }
        }
        return(
            <Link to="/" style={inlineStyle.img}>
            <div style={inlineStyle.personAvatar}>
                <img src={Image} style={inlineStyle.avatar} alt="avatar"/>
            </div>
            <div style={inlineStyle.avatarContent}>
                <h1 style={inlineStyle.avatarTitle}> Jonathan Taylor</h1>
                <h2 style={inlineStyle.avatarSubtitle}>Full-Stack Engineer</h2>
            </div>
            </Link>
        )
    }
}

export default SideImage;