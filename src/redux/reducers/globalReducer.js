const initGlobalState = {
    category : [],
    dataProduct : [],
    dataCart : [],
    dataTransaction : [],
    showSpinner : false,
    showSuccess : false,
    showEror : false,
}

const globaReducer = (globalState = initGlobalState, action) => {
    switch(action.type) {
        case "DO_ALERT_SUCCESS" :
            return {
                ...globalState,
                showSuccess : true
            }

        case "HIDE_ALERT_SUCCESS" :
            return {
                ...globalState,
                showSuccess : false
            }

        case "DO_ALERT_ERROR" :
            return {
                ...globalState,
                showEror : true
            }

        case "HIDE_ALERT_ERROR" :
            return {
                ...globalState,
                showEror : false
            }            
        
        case "DO_SPIN" : 
            return {
                ...globalState,
                showSpinner : true
            }
        case "STOP_SPIN" : 
            return {
                ...globalState,
                showSpinner : false
            }

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

        case "CHANGE_FILE_INPUT" :
            return {
                ...globalState,
                [action.payload.target.name] : action.payload.target.files[0]
            }

        case "GET_DATA_PRODUCT" :
            return {
                ...globalState,
                dataProduct : action.payload
            }
            
        case "GET_DATA_CART" :
            return {
                ...globalState,
                dataCart : action.payload
            }

        case "GET_DATA_TRANSACTION" :
            return {
                ...globalState,
                dataTransaction : action.payload
            }

        default :
            return {
                ...initGlobalState
            }
    }
}

export default globaReducer;