import axios from 'axios'

const mainUrl = process.env.REACT_APP_MAIN_API_URL
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxNDA1OTAsIm5iZiI6MTU4OTE0MDU5MCwianRpIjoiYzlkZjFlZWEtZTVjMy00ODNiLWFhOWItNTZiZTUyOTMzMTYxIiwiZXhwIjoxNTg5MjI2OTkwLCJpZGVudGl0eSI6InhtdXNoIiwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6Miwicm9sZSI6InVzZXIifX0.JR9ymHKpDKm9Th50AjCsE3__qpcKQk6o3Skzpx8BnTQ'

export const getCategory = () => {
    return async dispatch => {
        try{
            const category = await axios.get(mainUrl+'/category/list')
            console.log('ini response category ',category)
            dispatch({
                type : 'GET_CATEGORY',
                payload : category.data
            })

        }
        catch(eror) {
            console.log(eror)
        }
    }
}

// for handle user input change
export const handleChange = (e) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: e,
    };
}