import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { relativeTimeRounding } from 'moment';
import {Grid, Form, Segment, Button, Header} from "semantic-ui-react";

class Dashboard extends Component {
    constructor(props){
        super(props)
    }
     render(){
         return(
            <div className= "Header">
                <h1>React Dashboard</h1>
                <p> Your personal Fitness dashboard</p>
                <div className="row text-center">
                <a href={`https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22D97Q&redirect_uri=http%3A%2F%localhost%3A3000&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`}>
                  Log into account 
                 </a>
                </div>
            </div>
                    
                         
         )  
     }
}

export default Dashboard
