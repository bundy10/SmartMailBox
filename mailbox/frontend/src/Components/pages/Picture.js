import React from 'react';
import '../../App.css';
import Picture from '../Picture';
import ParticleBackground from '../background/ParticleBackground';
import Navbar from '../Navbar';

function picture() {
  return (
    <>
    <Navbar />
    <ParticleBackground className= "particles"/>
    <Picture/>
    </>
  );
}

export default picture;