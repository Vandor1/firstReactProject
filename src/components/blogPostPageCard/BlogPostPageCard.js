import React from 'react';
import './BlogPostPageCard.css';


export default function BlogPostPageCard({date, longDescription}) {
    return (
        <div className={"blogpostpage-wrapper"}>
            <p id={"blogpostdate"}>{date}</p>
            <p id={"blogpostdescription"}>{longDescription}</p>
        </div>
    )
}