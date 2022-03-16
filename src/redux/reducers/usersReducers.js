const initialState = {
    user: null,
    message:null,
    
}

const userReducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,   
            }
            case 'message':
            return {
                ...state,
                message: action.payload,   
            }

        default:
            return state
    }
}
export default userReducer