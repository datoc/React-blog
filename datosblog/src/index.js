import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Details from "./Details";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.scss";

function App(props) {
    const href1 = window.location.pathname;
    var titl = "";

    if(href1 == "/contact") titl = "კონტაქტი";
    else if (href1 == "/about") titl = "შესახებ";
    else if (href1 == "/") titl = "Tech ბლოგი";
    return (
        <div>
            <Router>
                <Header title={titl} />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact name={href1} />
                    </Route>
                    <Route path="/details">
                        <Details />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

var element = document.getElementById("root");
ReactDOM.render(<App />, element);