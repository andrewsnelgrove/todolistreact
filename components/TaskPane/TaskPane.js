import React from 'react';

import classes from './TaskPane.css';
import BackdropTaskPane from './BackdropTaskPane/BackdropTaskPane';

const taskPane = (props) => {
  return (
    <div className={classes.TaskPane}>
      <BackdropTaskPane type="firstTypeMainPane"/>
    </div>
  );
};

export default taskPane;
