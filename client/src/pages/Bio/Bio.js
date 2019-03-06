import React, { Component } from "react";
import "./bio.css";
import API from "../../lib/API"

class BioPage extends Component {
    state = {
        dog: {}
    };

    componentDidMount() {
        API.Bio.getBio(this.props.match.params.id)
        .then(res => this.setState({ dog: res.data }))
        .catch(err => console.log(err));
    }

    render() {
        const { dog } = this.state;
        return (
            <div>
            <img src={dog.image} alt={dog.name} />
            <h4>{dog.name}</h4>
            <h5>{dog.age}</h5>
            <h5>{dog.breed}</h5>
            <h5>{dog.sex}</h5>
            <h5>{dog.size}</h5>
            <p>{dog.description}</p>
            </div>
            
        )
    }
}

export default BioPage