/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import MessagesContainer from './containers/MessagesContainer';
import FormContainer from './containers/FormContainer';
import './style.css';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '90vh'}}>
        <MessagesContainer />
        <FormContainer />
      </div>
    );
  }
}

export default App;
