import React from 'react';
import './cardcss.css';
import {Link} from "react-router-dom";


export default function Card({id, title, date,subheading, description, picture}) {
    return (
        <div className={"blogCard"}>
            <div className={"blogCardLeft"}>
                <h2>{title}</h2>
                <h6>{date}</h6>
                <h5>{subheading}</h5>
                <p>{description}</p>
                <Link to={"/post/" + id}>Further reading.. -></Link>
                <div className={"bottomRow-wrapper"}>
                    <div className={"deletePost"}>Delete</div>
                    <div className={"commentPost"}>Comment (2 comments)</div>
                    <div className={"editPost"}>Edit</div>
                </div>

            </div>
            <div className={"blogCardRight"}>
                <img src={picture} className={"blogCardImg"} alt={""}/>
            </div>
        </div>
    )
}