import React, { Component } from 'react';

class Button extends Component {

  handleClick(){
    
    this.props.onClick(this.props.action);

  }

  render() {

    var style = {
      'background-color': '#4CAF50',
      'border': 'none',
      'color': 'white',
      'padding': '15px 32px',
      'text-align': 'center',
      'text-decoration': 'none',
      'display': 'inline-block',
      'font-size': '16px',
      'margin': '16px'
    };

    return (
        <button style={style} onClick={this.handleClick.bind(this)}>{ this.props.label }</button>
    );

  }

}

export default Button;
