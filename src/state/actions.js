let ws;

export function setHistory(messages) {
  return {
    type: 'SET_HISTORY',
    messages,
  };
}

export function receiveMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message,
  };
}

export function setName(name) {
  return {
    type: 'SET_NAME',
    name,
  };
}

export function setString(string) {
  return {
    type: 'SET_STRING',
    string,
  };
}

export function sendMessage() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.string.length === 0) {
      return;
    }
    const object = {
      type: 'message',
      name: state.name,
      string: state.string,
    };
    ws.send(JSON.stringify(object));
    dispatch(setString(''));
  };
}

export function setupWebsocket() {
  return dispatch => {
    ws = new WebSocket('ws://localhost:8080');
    ws.addEventListener('message', message => {
      const parsed = JSON.parse(message.data);
      if (parsed.type === 'message') {
        dispatch(receiveMessage(parsed));
      }
      if (parsed.type === 'history') {
        dispatch(setHistory(parsed.messages));
      }
    });
  };
}
