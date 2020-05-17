const initialUserState = {
    username : '',
    token : '',
    test : '',
    isRegister : false,
    loginStatus : false,
    dataUser : {}
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

        case "REGISTER_USER" :
            return {
                ...userState,
                isRegister : true
            }

        case "GET_USER_DATA" :
            return {
                ...userState,
                dataUser : action.payload
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