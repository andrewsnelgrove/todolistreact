import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import InputBar from '../../components/InputBar/InputBar';
import TaskPane from '../../components/TaskPane/TaskPane';


class ToDoListReactApp extends Component {


  render () {
    return (
      <Aux>
      <InputBar/>
      <TaskPane/>
       </Aux>
    );
  }
}

export default ToDoListReactApp;
