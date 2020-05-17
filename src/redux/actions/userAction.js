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
                password : password}
            )
            
            // console.log("user_id ini => ", login.data)
            dispatch({
                type : "GET_AUTH_TOKEN",
                payload : login.data.token
            })

            // request user profil data
            const user_id = login.data.id
            const userData = await axios.get(mainUrl+'/user/'+user_id)

            localStorage.setItem('dataUser', JSON.stringify(userData.data))
            dispatch({
                type : "GET_USER_DATA",
                payload : userData.data
            })

        } catch(eror) {
            console.error('fail login eror : ', eror)
        }
    }
}

export const doLogout = () => {
    localStorage.clear();
    return dispatch => {
        try{
            dispatch({
                type : "LOGOUT"
            })
        }
        catch(eror){
            console.error('fail logout : ', eror)
        }
    }
}

export const doRegister = (props, getState) => {
    return async (dispatch, getState) => {
        
        const data = {
            username : getState().global.regisUsername,
            password : getState().global.regisPassword,
            email : getState().global.regisEmail,
            fullname : getState().global.regisFullname,
            address : getState().global.regisAddress,
            contact : getState().global.regisContact,
            sex : getState().global.regisGender
        }
        const register = await axios.post(mainUrl+'/registration', data)
        
        console.log(register.data)
        dispatch({
            type : "REGISTER_USER"
        })
    }
    // const state = getState()
}