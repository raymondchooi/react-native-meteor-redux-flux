export function removeCurrentUser(payload) {
  return {
    type: 'REMOVE_CURRENT_USER',
    payload: {
      userName: payload.userName,
    }
  };
}
