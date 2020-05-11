import axios from 'axios'
// import request from 'request'

const mainUrl = process.env.REACT_APP_MAIN_API_URL
const serverUrl = process.env.REACT_APP_SERVER_URL


export const testOnly = () => {
    return {
        type : 'TEST',
        payload : 'test'
    }
}

export const doLogin = () => {
    return async (dispatch, getState) => {
        try{
            let username = getState().global.inputUsername
            let password = getState().global.inputPassword

            const login = await axios.post(mainUrl+'/auth',
                {username : username,
                password : password}, {
                    headers : {
                        'content-type': 'text/json',
                        'Access-Control-Allow-Origin' : '*'
                    }
                }
            )
            
            console.log('ini setelah test login')
            dispatch({
                type : "GET_AUTH_TOKEN",
                payload : login.data.token
            })

        } catch(eror) {
            console.error('fail login eror :', eror)
        }
    }
}