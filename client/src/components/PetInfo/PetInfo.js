import React from "react";
import './petinfo.css';

// Want to make these into 3 a row
function PetInfo(props) {
    return (
       
            <>
                <img alt={props.media} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
                <h3>Name: {props.name}</h3>
            </>
       
    )
}

export default PetInfo;