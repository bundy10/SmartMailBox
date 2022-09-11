import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Picture from './Components/pages/Picture';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ParticleBackground from './Components/background/ParticleBackground';

class App extends Component {
  
  constructor(){

    super();

    this.state = {
      buttons: []
    }

  }

  componentWillMount(){

    this.setState({
      buttons: [
        {
          id: 1,
          name: 'lock',
          action: 'on'
        },
        {
          id: 2,
          name: 'unlock',
          action: 'off'
        }
      ] 
    })

  }

  render() {

    return (
      <Router>
      <ParticleBackground className= "particles"/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Picture' element={<Picture/>}></Route>
      </Routes>
    </Router>
    );

  }

}

export default App;
