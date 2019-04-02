import React , {Component} from 'react';



class Footer extends Component {
    render(){
        const inlineStyle= {
            footer: {
                position: 'absolute',
                bottom: "0",
                width: "100%",
                height: "60px",
                lineHeight: "60px",
                backgroundColor: "rgba(63, 3, 97, 0.529)",
                display: "block",
                color: "white"
            },
            text: {
                color: "white"
            }
        }
        return(
            <footer className="footer" style={inlineStyle.footer}>
                <div className="container">
                    <span className='' style={inlineStyle.text}>Jonathan Taylor &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        )
    }
}

export default Footer