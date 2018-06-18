const initialState = {
  name: 'Max',
  message: '',
  messages: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return Object.assign({}, state, {
        messages: action.messages,
      });
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.name,
      });
    case 'SET_MESSAGE':
      return Object.assign({}, state, {
        message: action.message,
      });
    case 'SEND_MESSAGE':
      return Object.assign({}, state, {
        message: '',
      });
    case 'RECEIVE_MESSAGE':
      return Object.assign({}, state, {
        messages: [...state.messages, action.message].slice(-20),
      });
    default:
      return state;
  }
}

export default reducer;
