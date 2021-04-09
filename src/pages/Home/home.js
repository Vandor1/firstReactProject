import React from 'react';
import {Link} from "react-router-dom";
import './homecss.css';
import newpost from './../../img/pluscircle.jpg';
import {blogPostList} from "../../blogPostsList";
import Card from "../../components/HomepageBlogCard/Card";
import Header from "../../components/Header/header";
import photo from "./../../img/NTNU.jpg";

function Home() {
    return (
        <>
        <Header img={photo} headerSubtitle={"React is cool"} headerTitle={"Welcome to my code blog"}/>
        <div className={"home-wrapper"}>
            <Link to={"/newPost"}>
                <img src={newpost} className={"newPost"} alt={"New blog post"}/>
            </Link>
            {
                blogPostList.map(function (item) {
                    {
                        return (<Card
                            title={item.title}
                            date={item.date}
                            subheading={item.subheading}
                            description={item.description}
                            picture={item.image}
                            id={item.id}
                        />);
                    }
                })}</div>
        </>
    );
}

export default Home;