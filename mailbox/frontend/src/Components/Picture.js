import React, { Component } from 'react';
import '../App.css';
import './Picture.css';
import Panel from './Panel'


class Picture extends Component {
  
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
          name: 'Request photo',
          action: 'on'
        },
      ] 
    })

  }

  render() {

    return (
      <div className='container'>
        <Panel buttons={this.state.buttons} />
      <h1 className='glitch'> 
<span aria-hidden="true">Picture, <br/>  <br/>  <i className="fa-solid fa-robot fa-bounce"></i> </span>
Picture,  <i className="fa-solid fa-robot fa-bounce"></i></h1>
<span aria-hidden="true">Picture, <br/>  <br/> </span>
<p>
  awdwwwwwwasd
 </p>
</div>
    );

  }

}

export default Picture;