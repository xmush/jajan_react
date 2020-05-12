const initialUserState = {
    username : '',
    token : '',
    test : '',
    loginStatus : false
}

const userReducer = (userState = initialUserState, action) => {
    
    switch(action.type) {

        case "TEST" :
            return {
                ...userState,
                test : action.payload
            }

        case "GET_AUTH_TOKEN" :
            return {
                ...userState,
                token : action.payload,
                loginStatus :true
            }

        case "LOGOUT" :
            localStorage.clear();
            return {
                ...initialUserState
            }

        default :
            return {
                ...userState
            }
    }

}

export default userReducer;