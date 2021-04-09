/*REACT*/
import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
/*CSS*/
import "./headercss.css";
/*Pictures*/
import searchPicture from "./../../img/search.jpg"
/**/
import {blogPostList} from "../../blogPostsList";

export default function Header({headerTitle,headerSubtitle,img}) {
    const [search, setSearch] = useState(''); /*TODO: searches*/

    function submitSearch() {
        console.log(this);
        if(blogPostList.find(thing => thing.title.includes(search))){
           let pageID = blogPostList.find(thing => thing.title.includes(search)).id;
           console.log(pageID);
        }
    }


    return (
        <div className={"header-wrapper"} >

            <img src={img} className={"logoImage"}/>

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
                <h1 id="header-h1">{headerTitle}</h1>
                <h2 id="header-h2">{headerSubtitle}</h2>
            </div>
        </div>
    )
};
