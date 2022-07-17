import React, { Component } from 'react';
import Image from "../Image.png";

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"Hiba Khlifi",
            bio:"It’s always nice to be reminded that there’s a little bit of magic in programming.",
            profession:"Full stuck Web Developer",
            imgSrc: <img src={Image} className="event" width='400' alt="pic"/>,
            counter:0,
        }
        
            
        }
    componentDidMount(){
        setInterval(()=>this.setState({counter:this.state.counter+1}),1000)
    }
    render() {
        return (
            <div>
                <div>counter:{this.state.counter}</div>
                <h1>{this.state.fullname}</h1>
                <h2>{this.state.bio}</h2>
                <h2>{this.state.profession}</h2>
                {this.state.imgSrc} 
                
            </div>
        )
    }

}