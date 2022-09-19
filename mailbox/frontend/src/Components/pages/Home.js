import React from 'react';
import '../../App.css';
import Home from '../Home';
import ParticleBackground from '../background/ParticleBackground';
import Navbar from '../Navbar';

function home() {
  return (
    <>
    <Navbar />
    <ParticleBackground className= "particles"/>
    <Home/>
    </>
  );
}

export default home;