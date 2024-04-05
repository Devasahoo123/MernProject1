export const initialState=null;
export const reducer =  (state, action) => {
//   console.log('Action received: ', action);
    if(action.type==="USER"){
        return action.payload;
    }
    return state;
}