import React, { Component } from 'react';
import './adopt.css';
import API from "../../lib/API";
import Axios from 'axios';
import Card from "../../components/Card/Card";

class AdoptPage extends Component {
    state = {
        pets: [];
        // We can only do GETS with petfinder API. So we want to do GETs and store in mongoDB with mongoose, which is setup somewhat on server side.  Once we store the dog into the DB, we wanna populate the dog's info on the client side on the adoptables page. Find out how to set it up so that one dog per circle pops up. 
        
    };
        componentDidMount() {
            console.log("KH1")
            this.loadDog();
            const newState = { ...this.state };
        }
        
        loadDog = () => {
            // Make API call 
            API.Petfinder.getAllDogs()
            .then(res => console.log(res))
            .catch(err => console.log(err));
            // Store in the DB
            // something with state
            
        }
        
        render () {
            return()
                
            }
        }
        
        export default AdoptPage;