import React from 'react';
import './cardcss.css';


export default function Card({title, subheading, description, picture}) {
    return (
        <div className={"blogCard"}>
            <div className={"blogCardLeft"}>
                <h2>{title}</h2>
                <h6>Date: 05.04.2021</h6>
                <h5>{subheading}</h5>
                <p>{description}</p>
                <p>Further reading.. -></p>
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