const initialState = {
  name: 'Max',
  string: '',
  messages: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        messages: action.messages,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_STRING':
      return {
        ...state,
        string: action.string,
      };
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
}
