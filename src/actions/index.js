let ws;

export function receiveMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message,
  };
}

export function setMessages(messages) {
  return {
    type: 'SET_MESSAGES',
    messages,
  };
}

export function setName(name) {
  return {
    type: 'SET_NAME',
    name,
  };
}

export function setMessage(message) {
  return {
    type: 'SET_MESSAGE',
    message,
  };
}

export function sendMessage() {
  return (dispatch, getState) => {
    const {name, message} = getState();
    const object = {
      name,
      string: message,
      type: 'message',
    };
    ws.send(JSON.stringify(object));
    return dispatch(setMessage(''));
  };
}

export function connectToWebsocket() {
  return dispatch => {
    ws = new WebSocket('ws://localhost:8080');
    ws.addEventListener('message', message => {
      const parsed = JSON.parse(message.data);
      if (parsed.type === 'message') {
        dispatch(receiveMessage(parsed));
      }
      if (parsed.type === 'history') {
        dispatch(setMessages(parsed.messages));
      }
    });
  };
}
