import React from 'react';
import  style from './hello.css';

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      word: 'hahah'
    };
  }

  render() {
    return (
      <div className="h">
        <h1> Hello </h1>
      </div>
   )
  }
}
/*
var Hello = React.createClass({

  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div className="h">
          Hello world 
      </div>
    );
  }
});
*/

