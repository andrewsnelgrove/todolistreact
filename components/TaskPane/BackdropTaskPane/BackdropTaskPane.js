import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BackdropTaskPane.css';

class BackdropTaskPane extends Component {
  render() {
    let mainpane = null;

    switch (this.props.type) {
      case ('firstTypeMainPane'):
        mainpane = <div className={classes.FirstTypeMainPane}></div>;
        break;
      case ('secondTypeMainPane'):
        mainpane = <div className={classes.SecondTypeMainPane}>
                       <div className={classes.OneTaskPane}></div>
                  </div>
        break;
      default:
        mainpane = null;

    }
    return mainpane;
  }
};

BackdropTaskPane.propTypes ={
  type: PropTypes.string.isRequired
};
  
export default BackdropTaskPane;
