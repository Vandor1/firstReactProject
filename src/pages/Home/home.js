import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './homecss.css';
import newpost from './../../img/pluscircle.jpg';
import pythonPicture from './../../img/pythonLogo.png';
import hackTheBox from './../../img/hackthebox.jpg';


function Home() {
    return (
            <div className={"home-wrapper"}>
                <Link to={"/newPost"}>
                    <img src={newpost} className={"newPost"} alt={"New blog post"}/>
                </Link>

                <div className={"blogCard"}>
                    <div className={"blogCardLeft"}>
                        <h2>LeetCode Review!</h2>
                        <h6>Date: 05.04.2021</h6>
                        <h5>"LeetCode is the best platform to help you enhance your skills, expand your knowledge and
                            prepare for technical interviews."</h5>
                        <p>I've solved a number of easy leetcode algorithm problems and here is what I think!</p>
                        <p>Further reading.. -></p>
                        <div className={"bottomRow-wrapper"}>
                            <div className={"deletePost"}>Delete</div>
                            <div className={"commentPost"}>Comment (2 comments)</div>
                            <div className={"editPost"}>Edit</div>
                        </div>

                    </div>
                    <div className={"blogCardRight"}>
                        <img src={pythonPicture} className={"blogCardImg"} alt={"Python picture"}/>
                    </div>
                </div>

                <div className={"blogCard"}>
                    <div className={"blogCardLeft"}>
                        <h2>HACKTHEBOX Review!</h2>
                        <h6>Date: 05.04.2021</h6>
                        <h5>"Join a dynamically growing hacking community and take your cybersecurity skills to the next
                            level through the most captivating, gamified, hands-on training experience!"</h5>
                        <p>I hacked my "way in" to the box to start the real challenges, here is how!</p>
                        <p>Further reading.. -></p>
                        <div className={"bottomRow-wrapper"}>
                            <div className={"deletePost"}>Delete</div>
                            <div className={"commentPost"}>Comment (2 comments)</div>
                            <div className={"editPost"}>Edit</div>
                        </div>
                    </div>
                    <div className={"blogCardRight"}>
                        <img src={hackTheBox} className={"blogCardImg"} alt={"Hack the box picture"}/>
                    </div>
                </div>
            </div>
    );
}

export default Home;