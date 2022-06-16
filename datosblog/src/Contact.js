import React from "react";
import axios from "axios";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            email : "",
            subject : "",
            message : ""
        }
    }

    nameCh = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    emailCh = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    subCh = (event) => {
        this.setState({
            subject : event.target.value
        })
    }

    letterCh = (event) => {
        this.setState({
            message : event.target.value
        })
    }

    sendmail = () => {
        if(this.state.name == "" || this.state.email == "" || this.state.subject == "" || this.state.message == "") {
            window.alert("შეავსეთ ყველა ველი");
            return false;
        }else {
            axios.post("https://api-blog-my.herokuapp.com/send", {
                name : this.state.name,
                email : this.state.email,
                subject : this.state.subject,
                letter : this.state.message
            }).then(function(response) {
                window.alert("წერილი გაიგზავნა");
            }).catch(function(response) {
                window.alert("დაფიქსირდა შეცდომა");
            });

            this.setState({
                name : "",
                email : "",
                subject : "",
                message : ""
            })

            return;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bg-light">
                    <br />
                    <div className="container">
                        <h2>საკონტაქტო ინფორმაცია</h2>
                        <br />
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <p><i className="fa fa-map-marker"></i>&nbsp;&nbsp;<span>საქართველო, გორი</span></p>
                            </div>
                            <br />
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <p><i className="fa fa-phone"></i>&nbsp;&nbsp;<span>(+995) 551 19 99 02</span></p>
                            </div>
                            <br />
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <p><i className="fa fa-envelope"></i>&nbsp;&nbsp;<span>chechelashvili.dato111@gmail.com</span></p>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-fluid">
                    <div className="row" style={{overflow :"hidden"}}>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Gori&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <form method="POST">
                                <br />
                                <div className="form-group">
                                    <input type="text" placeholder="თქვენი სახელი" name="name" className="form-control" onChange={this.nameCh} value={this.state.name}></input>
                                </div><br />
                                <div className="form-group">
                                    <input type="email" placeholder="იმეილი" name="email" className="form-control" onChange={this.emailCh} value={this.state.email}></input>
                                </div><br />
                                <div className="form-group">
                                    <input type="text" placeholder="თემა" name="subject" className="form-control" onChange={this.subCh} value={this.state.subject}></input>
                                </div><br />
                                <div className="form-group">
                                    <textarea name="letter" placeholder="დაწერეთ წერილი..." className="form-control" onChange={this.letterCh} value={this.state.message}></textarea>
                                </div><br />
                                <div className="form-group">
                                    <button type="button" className="send" onClick={this.sendmail}>წერილის გაგზავნა</button>
                                </div><br />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;