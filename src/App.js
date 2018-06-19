import React, {Component} from 'react';
import MessageContainer from './containers/MessageContainer';
import Form from './Form';
import './style.css';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '90vh'}}>
        <MessageContainer />
        <Form sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
