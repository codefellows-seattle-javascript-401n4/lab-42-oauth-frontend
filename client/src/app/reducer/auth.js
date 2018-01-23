export default (state=false, action) => {
  
  let {type, payload} = action;
  
  switch(type) {
      case "LOGIN":
      console.log('YES')
          return true;
          
      case "LOGOUT":
          return false;
          
      default:
          return state;
  }
}