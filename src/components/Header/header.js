/*REACT*/
import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation, useParams} from "react-router-dom";
/*CSS*/
import "./headercss.css";
/*Pictures*/
import searchPicture from "./../../img/search.jpg"
import logo from "../../img/NTNU.jpg";
import contactPhoto from "./../../img/contactPhoto.jpg";
import aboutPhoto from "./../../img/aboutMePhoto.jpg";
import newPostPhoto from "./../../img/create.png";
/**/
import {blogPostList} from "../../blogPostsList";

export default function Header() {
    const [search, setSearch] = useState(''); /*TODO: searches*/
    const [photo, setPhoto] = useState(logo);
    const location = useLocation();

    const path = location.pathname.slice(1);

    function submitSearch() {
        console.log(this);
        if(blogPostList.find(thing => thing.title.includes(search))){
           let pageID = blogPostList.find(thing => thing.title.includes(search)).id;
           console.log(pageID);
        }
    }

    /*TODO: split navbar / header */
    useEffect(() => {
        var x = document.getElementById("header-h1");
        var y = document.getElementById("header-h2");

        switch(location.pathname){
            case "/contact":
                x.innerHTML = "Contact Me";
                y.innerHTML = "For the record: this does not work";
                setPhoto(contactPhoto);
                break;
            case "/about":
                x.innerHTML = "About Me";
                y.innerHTML = "I am a Lorem ipsum dolor sit amet";
                setPhoto(aboutPhoto);
                break;
            case "/newPost":
                x.innerHTML = "New Blog Post";
                y.innerHTML = "Create a new code related blogpost using the following form.";
                setPhoto(newPostPhoto);
                break;
            case "/":
                x.innerHTML = "Welcome to my coding blog";
                y.innerHTML = "I'm a self-proclaimed code-monkey";
                setPhoto(logo);
                break;
            default:
                break;
        }
    }, [location]);


    return (
        <div className={"header-wrapper"} >

            <img src={photo} className={"logoImage"}/>

            <header className={"header"}>
                <div className={"left-header"}>
                    <Link className={"LinkHeader"} to={"/"}>Coding Blog</Link>
                </div>
                <div className={"right-header"}>
                    <nav className={"headerMenu"} >
                        <NavLink exact Link to={"/"} activeClassName="selected" className={"navLink"}>Home</NavLink>
                        <NavLink Link to={"/about"}  activeClassName="selected" className={"navLink"}>About</NavLink>
                        <NavLink Link to={"/contact"} activeClassName="selected" className={"navLink"}>Contact</NavLink>
                    </nav>
                    <div className={"searchBar"}>
                        <form onSubmit={submitSearch()}>
                            <input onChange={event => {
                                setSearch(event.target.value)
                            }} type={"text"}  className={"searchInput"} placeholder={"Search.."}/>

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
