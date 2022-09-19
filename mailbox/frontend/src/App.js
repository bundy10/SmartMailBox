import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Picture from './Components/pages/Picture';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/pages/Login';

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
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Picture' element={<Picture/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </Router>
    );

  }

}

export default App;
