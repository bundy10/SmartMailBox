// main app 
import React, { Component } from 'react';
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
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Picture' element={<Picture/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </Router>
    );

  }

}

export default App;
