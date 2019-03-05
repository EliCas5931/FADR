import React from "react";

function PetInfo(props) {
    return (
        <div className="text-center">
        <img alt={props.media} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h3>Name: {props.name}</h3>
        </div>
    )
}

export default PetInfo;