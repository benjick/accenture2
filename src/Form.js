import React, {Component} from 'react';

class Form extends Component {
  submit = event => {
    event.preventDefault();
    this.props.sendMessage();
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <div style={{flex: 0, height: 30, display: 'flex'}}>
          <input
            style={{height: '100%'}}
            onChange={e => this.props.setName(e.target.value)}
            value={this.props.name}
          />
          <input
            style={{flex: 1, height: '100%'}}
            onChange={e => this.props.setMessage(e.target.value)}
            value={this.props.message}
          />
          <button>Send message</button>
        </div>
      </form>
    );
  }
}

export default Form;
