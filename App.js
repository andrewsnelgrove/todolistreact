import React, {Component}  from 'react';
import Layout from './components/Layout/Layout';
import ToDoListReactApp from './containers/ToDoListReactApp/ToDoListReactApp';

class App extends Component {
  render(){
    return (
      <div>
      <Layout>
      <ToDoListReactApp />

      </Layout>
      </div>

    );
  }
}

export default App;
