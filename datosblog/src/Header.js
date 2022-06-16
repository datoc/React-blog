import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="custom">DATO'S&nbsp;BLOG</Link>
                        </div>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#colnav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="colnav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">მთავარი</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">შესახებ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">კონტაქტი</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 100
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }}
                        height="100vh"/>
                    <div className="layer">
                        <h1 id="t">{this.props.title}</h1>
                        <br />
                        <Link to="/about"><button type="button" className="more">გაიგეთ&nbsp;მეტი</button></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;