import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get("https://api-blog-my.herokuapp.com/posts").then(function(response) {
            this.setState({
                posts : response.data
            });
        }.bind(this));
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row">
                        {
                            this.state.posts.map(a => <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12" style={{width : "350px", border : "6px solid #f1f2f3",overflow : "hidden"}} id="pp"><img src={a.image} style={{width : "350px"}} className="rounded img-thumbnail" /><br /><br /><Link to={"/details?q="+a._id}><h4>{a.title}</h4></Link></div>)
                        }
                    </div>
                    <br />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;