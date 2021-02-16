const initialState = {
    userInfo: null,
    loadingUser: false,
    loadingCredits: false,
    error: null
}



export default (state=initialState, action) => {
    switch(action.type) {
        case "USER_INFO":
            console.log("reducer USER_INFO=------", action)
            return {
                ...state,
                userInfo: action.userInfo,
                loadingUser: false,
                loadingCredits: false,
                error: null
            };
        case "LOADING_USER":
            console.log("reducer loadingggggggggg---", action )
            return {
                ...state,
                userInfo: action.userInfo,
                loadingUser: action.loadingUser,
                error: null
            }; 
        case "LOADING_CREDIT":
            return {
                ...state,
                loadingCredits: true
            }
        case "ERROR":
            return {
                ...state,
                loadingUser: false,
                error: action.payload
            }       
        default:
            return state;    
    }
}