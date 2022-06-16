import React from "react";
import axios from "axios";

class Details extends React.Component {
    constructor() {
        super()

        this.state = {
            datas : [],
            query : window.location.search.split("=")[1]
        }
    }

    componentDidMount() {
        axios.get(`https://api-blog-my.herokuapp.com/posts/${this.state.query}`).then(function(response) {
            this.setState({
                datas : response.data
            });
        }.bind(this));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>{this.state.datas.title}</h1>
                    <br />
                    <center><img src={this.state.datas.image} className="rounded img-thumbnail" /></center>
                    <br />
                    <p>{this.state.datas.body}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Details;