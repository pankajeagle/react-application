import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/Menucomponent'
import Users from './users/Users'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/"> PANKAJ JAIN</NavbarBrand>
        </div>
      </Navbar>
      <Users/>
      
    </div>
  );
}

export default App;
