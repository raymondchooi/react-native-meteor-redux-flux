export function addCurrentUser(payload) {
  return {
    type: 'ADD_CURRENT_USER',
    payload: {
      userName: payload.userName,
    }
  };
}
