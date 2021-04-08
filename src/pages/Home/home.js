import React from 'react';
import {Link} from "react-router-dom";
import './homecss.css';
import newpost from './../../img/pluscircle.jpg';
import {blogPostList} from "../../blogPostsList";
import Card from "../../components/HomepageBlogCard/Card";


function Home() {
    return (
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
    );
}

export default Home;