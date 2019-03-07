import React, { Component } from 'react';
import './adopt.css';
import Card from "../../components/Card/Card";
import PetInfo from "../../components/PetInfo/PetInfo.js";
import API from "../../lib/API"
import { Link } from "react-router-dom";

class AdoptPage extends Component {
    state = {
        pets: []
        // We can only do GETS with petfinder API. So we want to do GETs and store in mongoDB with mongoose, which is setup somewhat on server side.  Once we store the dog into the DB, we wanna populate the dog's info on the client side on the adoptables page. 

    };
    componentDidMount() {
        console.log("KH1")
        this.loadDog();
        // const newState = { ...this.state };
    }

    loadDog = () => {
        // Make API call 
        // API.Petfinder.getAllDogs()
        // .then(res => {
        //     this.setState({
        //         pets: res.data
        //     })
        //     console.log(res.data)
        //     // loop through dogs one by one 
        //     this.state.pets.forEach(dog => API.Petfinder.createDog(dog))
        // })

        // .catch(err => console.log(err))
        // console.log(this.state.pets)
        // Store in the DB
        API.Database.getAllDB()
            .then(res => {
                this.setState({
                    pets: res.data
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }

    render() {
        console.log(this.state.pets)
        return (

            <Card
                heading={this.state.pets}>
                {this.state.pets.length ? (
                    this.state.pets.map(pet => (
                        <div className='col-4'>
                            <Link to={"/bio/" + pet._id}>
                                <PetInfo

                                    key={pet._id}
                                    media={pet.name}
                                    src={pet.image}
                                    name={pet.name}

                                />
                            </Link>
                        </div>
                        // <PetInfo
                        // media={pet.name.$t}
                        // src={pet.media.photos.photo[3].$t}
                        // name={pet.name.$t}
                        // />
                    )

                    )) : (
                        <h3>No Dogs Available at this Time.</h3>
                    )}
            </Card>
        )

    }
}

export default AdoptPage;