import axios from 'axios'
export const getFetchUser = () => {
    return async (dispatch, getState) => {
        const { user } = getState();
        console.log("actionnn userInfo---", user.userInfo ,"getState user----", user)
        dispatch({
            type: "LOADING_USER",
            userInfo: null,
            loadingUser: true
        })
        try {
            const getUser = await axios.get("/api/currentuser");
            console.log("actionnn  getUser----", getUser)
            dispatch({
                type: "USER_INFO",
                userInfo: getUser && getUser.data,
                loadingUser: false 
            })
          } catch(error) {
            dispatch({
                type: "ERROR",
                payload: error,
                loadingUser: false 
            })
        }
        
    }
}

export const addCreditClick = () => async (dispatch, getState) => {
    dispatch({
        type: "LOADING_CREDIT",
        loadingCredits: true
    })
    try {
        const getUser = await axios.post("/api/addcredits", {
            credits: 5 
        });
        dispatch({
            type: "USER_INFO",
            userInfo: getUser && getUser.data,
            loadingCredits: false
        })
    } catch (error) {
        console.log("error credits----", error)
        dispatch({
            type: "ERROR",
            payload: error,
            loadingCredits: false 
        })
    }


}