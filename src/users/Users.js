import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  // Setting Initial State
  state = {
    users: [
      {name:"MSD", runs:10000},
      {name:"Sachin", runs:17000},
      {name:"Sehwag", runs:12000},
      {name:"ganguly", runs:14000},
      {name:"Dravid", runs:11000}
    ],
    title:"Crickers"
  }

  // Handle to modify state
  makeMoreRuns = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      tempUser.runs += 1000;
      return tempUser;
    });
    this.setState({
      newState
    });
  }

  render(){
    return (<div>
     
      <h1>{this.state.title}</h1>
      {
        this.state.users.map((user)=>{
          return <User runs={user.runs}>{user.name}</User>
        })
      }
      <br/>
       <button onClick={this.makeMoreRuns}>Make 1000 runs more</button>
       <br/>
      </div>)
  }
}

export default Users;