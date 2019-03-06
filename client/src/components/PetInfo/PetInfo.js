import React from "react";
import './petinfo.css';

// Want to make these into 3 a row
function PetInfo(props) {
    return (
       
            <div className='col-4'>
                <img alt={props.media} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
                <h3>Name: {props.name}</h3>
            </div>
       
    )
}

export default PetInfo;