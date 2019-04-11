import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import Image from '../Images/2-large.jpg'
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
                width: "250px",
                height: "350px",
                borderRadius: "50%", 
            },
        }
        return(
            <Link to="/home" style={inlineStyle.img}>
            <div style={inlineStyle.personAvatar}>
                <img src={Image} style={inlineStyle.avatar} alt="avatar"/>
            </div>
            </Link>
        )
    }
}

export default SideImage;