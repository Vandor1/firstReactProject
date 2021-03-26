import React from 'react';
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./headercss.css";

/**
 *
 * @param props
 * @returns {JSX.Element}
 */

const Header = (props) => {
    return (
        <Router>
            <header className={"header"}>
                <div>
                    <h3>Coding Blog</h3>
                      {/*TODO: ADD FONT*/}
                </div>
                <nav className={"headerMenu"}>
                    <NavLink exact Link to={"/"} activeClassName="selected" className={"navLink"}>Home</NavLink>
                    <NavLink Link to={"/about"} activeClassName="selected" className={"navLink"}>About Us</NavLink>
                    <NavLink Link to={"/contact"} activeClassName="selected" className={"navLink"}>Contact Us</NavLink>
                </nav>
                <div className={"searchBar"}>Search: </div>
            </header>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

function Home(){
    return <h1>Home</h1>
}

function Contact(){
    return <h1>Contact</h1>
}

function About(){
    return <h1>About</h1>
}

export default Header;