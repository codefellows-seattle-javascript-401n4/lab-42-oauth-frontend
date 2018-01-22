import { type } from "os";

// TODO: Handle LOGIN & LOGOUT

export default (state=null, {type, payload}) => {
    
    switch(type) {

        case 'LOGIN':
            return true;
        
        case 'LOGOUT':
            return false;
        
        default:
            return state;
    }
    
}