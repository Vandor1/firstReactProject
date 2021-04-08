import React from 'react';
import logo from "../../img/NTNU.jpg";
import './Logocss.css';


export default function Logo() {
    return(
        <div className="card mb-3">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Mathias van der Bend BLOGG</h5>
                <p className="card-text">This is my blogg logo implemented from a base bootstrap card.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

    )
}
