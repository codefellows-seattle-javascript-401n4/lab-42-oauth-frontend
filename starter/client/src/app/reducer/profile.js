const defaultState = null;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return payload || {};

    case 'LOGOUT':
      return defaultState;

    case 'UPDATE_PROFILE':
      return Object.assign({}, state, payload);

    default:
      return state;
  }
};
