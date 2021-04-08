import React from 'react';
import './footercss.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import facebook from "./../../img/facebook-32.jpg";
import instagram from "./../../img/instagram-32.jpg";
import twitter from "./../../img/twitter-32.jpg";


export default function Footer() {
    return(
        <BrowserRouter>
        <footer>
            <nav>
                <NavLink to={"FACEBOOK LINK"}><img src={facebook} alt={"Facebook link"}/></NavLink>
                <NavLink to={"INSTAGRAM LINK"}><img src={instagram} alt={"Instagram link"}/></NavLink>
                <NavLink to={"TWITTER LINK"}><img src={twitter} alt={"Twitter link"}/></NavLink>
            </nav>
            <p className={"copyright"}>Copyright © Your Blog 2021</p>
        </footer>
        </BrowserRouter>
    );
}
