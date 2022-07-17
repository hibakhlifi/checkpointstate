
import React, { Component } from 'react'
import './App.css';
import Profile from './Profile/Profile';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
  }
  

  render() {
    return (
      <div>
        {this.state.show && <Profile/>}
        <button onClick={()=>this.setState({show:!this.state.show})}> Show </button>

      </div>
    )
  }
}