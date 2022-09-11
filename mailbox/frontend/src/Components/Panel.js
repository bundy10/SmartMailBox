import React, { Component } from 'react';

import Button from './Button';

import { config } from '../config.js'

class Panel extends Component {

  constructor(props){

    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(action) {

    var formData  = new FormData();

    formData.append('action', action);

    fetch(config.backend_url, {
      mode: 'no-cors',
      method: 'POST',
      body: formData
    }).then(function(response) {  
      
    });

  }

  render() {

    var style = {
      'width': '100%',
      'display': 'flex',
      'height': '100px',
      'justify-content': 'center',
      'zIndex': '20'
    };

    var buttons;

    buttons = this.props.buttons.map(button => {

      return (<Button label={button.name} key={button.id} action={button.action} onClick={this.handleClick.bind(this)} />)

    });

    return (
      <div classname='Panel' style={style}>
        { buttons }
      </div>
    );
  }

}

export default Panel;
