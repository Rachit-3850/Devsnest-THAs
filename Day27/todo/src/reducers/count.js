
const userReducer = (state=[], action) => {
        if(action.type === "UPDATE_ADD") {
            return [...state , action.payload]  
    }
        if(action.type === "DELETE_ITEM") {
            return state.filter((item,index) => index !== action.payload)   
    }
    return state
}
export default userReducer