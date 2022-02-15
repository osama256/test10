import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_token':
      return { ...state, token: action.payload }
    default:
      return state;
  }
};

const addToken = dispatch => {
  return (token) => {
    dispatch({ type: "add_token", payload: token })
  }
}
export const { Provider, Context } = createDataContext(
  authReducer,
  { addToken, },
  { token: '' }
);