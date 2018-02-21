// TODO: Set a default route
let defaultRoute = "/login";

// TODO: Handle the "LOGIN" action. Might want to use that as automatic redirect to somewhere else.
export default (state=defaultRoute, action) => {
    let {type, payload} = action;

    switch(type) {
      case "SWITCH_ROUTE":
        return payload;

      case "LOGOUT":
        return "/login";

      case "LOGIN":
        return "/chat";

      default:
        return state;
    }
}