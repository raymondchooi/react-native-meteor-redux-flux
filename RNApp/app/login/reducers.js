const initialState = {
  userName: "", //E.g ray
};

export default function LoginReducers(state = [initialState], action) {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return  Object.assign({}, state, {
        userName: action.payload.userName,
      });
    default:
      return state;
  }
}
