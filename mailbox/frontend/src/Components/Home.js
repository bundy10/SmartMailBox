import React, { Component } from 'react';
import Panel from './Panel'
import '../App.css';
import './Picture.css';

class Home extends Component {
  
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
          name: 'Lock',
          action: 'on'
        },
        {
          id: 2,
          name: 'Unlock',
          action: 'off'
        }
      ] 
    })

  }

  render() {

    return (
      <div className='container'>
        <Panel buttons={this.state.buttons} />
      <h1 className='glitch'> 
<span aria-hidden="true">Home <br/>  <br/>  <i className="fa-solid fa-robot fa-bounce"></i> </span>
Home  <i className="fa-solid fa-robot fa-bounce"></i></h1>
<span aria-hidden="true">Home <br/>  <br/> </span>
<p>
  Click to Lock & Unlock your Smartmailbox
 </p>
</div>
    );

  }

}

export default Home;