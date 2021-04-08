import React, {useState} from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import "./headercss.css";
import searchPicture from "./../../img/search.jpg"
import logo from "../../img/NTNU.jpg";


export default function Header() {
    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState(false); /*TODO: searches*/
    const location = useLocation();

    const submitSearch = (event) => {
        event.preventDefault();
        console.log("Searched")
    }

    /*se på hooks*/
    const changeHeader = () => {
        var x = document.getElementById("header-h1");
        var y = document.getElementById("header-h2");
        switch(location.pathname){
            case "/contact":
                x.innerHTML = "Contact Me";
                y.innerHTML = "Want to get in touch?";
                break;
            case "/about":
                x.innerHTML = "About Me";
                y.innerHTML = "I am a Lorem ipsum dolor sit amet";
                break;
            case "/newPost":
                x.innerHTML = "New Blog Post";
                y.innerHTML = "Create a new code related blogpost using the following form.";
                break;
            case "/":
                x.innerHTML = "Welcome to my coding blog";
                y.innerHTML = "I'm a self-proclaimed code-monkey";
                break;
            default:
                break;
        }
    }

    return (
        <div className={"header-wrapper"} >

            <img src={logo} className={"logoImage"}/>

            <header className={"header"}>
                <div className={"left-header"}>
                    <Link className={"LinkHeader"} to={"/"}>Coding Blog</Link>
                </div>
                <div className={"right-header"}>
                    <nav className={"headerMenu"} onClick={changeHeader}>
                        <NavLink exact Link to={"/"} activeClassName="selected" className={"navLink"}>Home</NavLink>
                        <NavLink Link to={"/about"} activeClassName="selected" className={"navLink"}>About</NavLink>
                        <NavLink Link to={"/contact"} activeClassName="selected" className={"navLink"}>Contact</NavLink>
                    </nav>
                    <div className={"searchBar"}>
                        <form onSubmit={submitSearch}>
                            <input type={"text"} className={"searchInput"} placeholder={"Search.."}/>
                            <img onClick={submitSearch} className={"searchIcon"} src={searchPicture} alt={"search"}/>
                        </form>
                    </div>
                </div>
            </header>

            <div className={"cardTitle"}>
                <h1 id="header-h1">My name is jeff</h1>
                <h2 id="header-h2">And im a code monkey</h2>
            </div>
        </div>
    )
};
