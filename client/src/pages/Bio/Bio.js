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
            <div className='dogBioMain'>
                <div className='row' id='dogBioInfo'>
                    <div className='col-5'>
                        <img src={dog.image} alt={dog.name} id='dogBioPic'/>
                    </div>
                    <div className='col' id='extraDogInfo'>
                        <h2 id='dogName'>{dog.name}</h2>
                        <h2 id='dogAge'>{dog.age}</h2>
                        <h2 id='dogBreed'>{dog.breed}</h2>
                        <h2 id='dogSex'>{dog.sex}</h2>
                        <h2 id='dogSize'>{dog.size}</h2>
                    </div>
                </div>
                <div className='row' id='dogInfo'>
                    <div className='col-12'>
                        <p id='dogDescription'>{dog.description}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BioPage