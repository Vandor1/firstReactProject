import React from 'react';
import './Contactcss.css';
import Header from "../../components/Header/header";
import photo from "../../img/contactPhoto.jpg";

/**
 * This class is fetched from bootstrap and edited for my needs, link:
 * https://getbootstrap.com/docs/5.0/forms/layout/?
 * @returns {JSX.Element}
 * @constructor
 */
export default function contact() {
    return (
        <>
            <Header img={photo} headerSubtitle={"For the record, this doesn't work"} headerTitle={"Contact me!"}/>
            <div className={"form-wrapper"}>
                <p>Ask me anything using the following form. I’ll get back to you as soon as I can. (EN/NO)</p>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="ex: Alex Jones"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="ex: name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Question</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ex: Hello, I would like to know your github account!"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}