import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className="col-lg-12 col-md-12 ol-sm-12 col-xs-12">
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                                <h2 className="custom">DATO'S&nbsp;BLOG</h2>
                                <br />
                                <p>ძვირფასო მეგობრებო ეს არის ბლოგი სადაც დაიდება ხოლმე ძალიან საინტერესო ტექნოლოგიური სიახლეები</p>
                                <br />
                                <a href="https://facebook.com/dcstudioapp" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="https://instagram.com/dc_stdio" className="social"><i className="fa fa-instagram"></i></a>
                                <a href="https://twitter.com/botnet010" className="social"><i className="fa fa-twitter"></i></a>
                            </div>
                            <br />
                            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                                <h4 className="text-light">ბოლო სიახლეები</h4>
                                <br />
                                <div className="media">
                                    <img src="https://cdn4.buysellads.net/uu/1/93750/1628773830-carbon-ads-2021-08_2x.png" className="mr-3 img-responsive" />
                                    <div className="media-body">
                                        <p>Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <img src="https://cdn4.buysellads.net/uu/1/93750/1628773830-carbon-ads-2021-08_2x.png" className="mr-3 img-responsive" />
                                    <div className="media-body">
                                        <p>Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                                <h4 className="text-light">ლინკები</h4>
                                <br />
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" className="link">მთავარი</Link>
                                    </li><br />
                                    <li>
                                        <Link to="/about" className="link">შესახებ</Link>
                                    </li><br />
                                    <li>
                                        <Link to="/contact" className="link">კონტაქტი</Link>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                                <h4 className="text-light">გაქვთ კითხვები?</h4>
                                <br />
                                <i className="fa fa-phone"></i><a href="tel:+995551199902" style={{color: "#fff",textDecoration : "none"}}>&nbsp;&nbsp;551 19 99 02</a>
                                <br /><br />
                                <i className="fa fa-envelope"></i><a href="mailto:chechelashvili.dato111@gmail.com" style={{color: "#fff",textDecoration : "none"}}>&nbsp;&nbsp;chechelashvili.dato111</a><br /><br />
                                <i className="fa fa-map-marker"></i><span style={{color: "#fff",textDecoration : "none"}}>&nbsp;&nbsp;Georgia, Gori</span>
                            </div>
                            <br />
                        </div>
                    </div>
                </footer>
                <div className="bottom-line">
                    <br />
                    <div className="container text-center">
                        <p>Copyright&nbsp;&copy;&nbsp;2021. ყველა უფლება დაცულია</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;