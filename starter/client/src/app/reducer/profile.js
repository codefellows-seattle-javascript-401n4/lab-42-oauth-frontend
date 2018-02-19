export default (state=null, {type, payload}) => {

  switch(type) {

      case "LOGIN":
          return payload || {};

      case "LOGOUT":
          return defaultState;

      case "UPDATE_PROFILE":
          return Object.assign({}, state, payload);

      default:
          return state;


}
