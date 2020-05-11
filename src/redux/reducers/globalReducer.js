const initGlobalState = {
    category : []
}

const globaReducer = (globalState = initGlobalState, action) => {
    switch(action.type) {
        case "GET_CATEGORY" :
            return {
                ...globalState,
                category : action.payload
            }

        case "CHANGE_INPUT_USER" :
            return {
                ...globalState,
                [action.payload.target.name] : action.payload.target.value, 
            }

        default :
            return {
                ...initGlobalState
            }
    }
}

export default globaReducer;