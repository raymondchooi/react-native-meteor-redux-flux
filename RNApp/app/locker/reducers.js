const initialState = {
  userName: "", //E.g ray
};

export default function LockerReducers(state = [initialState], action) {
  switch (action.type) {
    case 'REMOVE_CURRENT_USER':
      return  Object.assign({}, state, {
        userName: "",
      });
    default:
      return state;
  }
}
