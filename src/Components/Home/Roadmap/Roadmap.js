import React from 'react';
import "./Roadmap.css"
import Roadmap from "../../../img/roadmap.png";

export default ()=> {
    return (
        <div className="roadmap">
            <h1 className="roadmap__title">NeyX Roadmap</h1>
            <img className="roadmap__img" src={Roadmap} alt="roadmap png" />
        </div>
    )
}
