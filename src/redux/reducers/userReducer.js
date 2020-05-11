const initialUserState = {
    username : '',
    token : '',
    test : ''
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
                token : action.payload
            }
        default :
            return {
                ...userState
            }
    }

}

export default userReducer;