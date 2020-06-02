import axios from 'axios'
import { version } from 'react'

const mainUrl = process.env.REACT_APP_MAIN_API_URL
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxNDA1OTAsIm5iZiI6MTU4OTE0MDU5MCwianRpIjoiYzlkZjFlZWEtZTVjMy00ODNiLWFhOWItNTZiZTUyOTMzMTYxIiwiZXhwIjoxNTg5MjI2OTkwLCJpZGVudGl0eSI6InhtdXNoIiwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6Miwicm9sZSI6InVzZXIifX0.JR9ymHKpDKm9Th50AjCsE3__qpcKQk6o3Skzpx8BnTQ'

export const hideSwal = () => {
    return async dispatch => {
        dispatch({
            type : "HIDE_ALERT_SUCCESS"
        })

        dispatch({
            type : "HIDE_ALERT_ERROR"
        })
    }
}

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

export const handleFileChange = (e) => {
    return {
        type : "CHANGE_FILE_INPUT",
        payload : e,
    }
}

export const doPostProduct = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type : "DO_SPIN"
            }) 

            const formData = new FormData();
                formData.append('name', getState().global.produkName)
                formData.append('description', getState().global.produkDeskripsi)
                formData.append('category_id', getState().global.produkCategory)
                formData.append('price', getState().global.produkPrice)
                formData.append('stock', getState().global.produkStock)
                formData.append('img_product', getState().global.produkPicture)
                formData.append('img_description', getState().global.produkImageDesc)

            const token = localStorage.getItem('_token')

            const config = {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': `Bearer ${token}`
                                }
                            }

            await axios.post(mainUrl+'/user/product', formData, config)
            
            dispatch({
                type : "STOP_SPIN",
            })

            dispatch({
                type : "DO_ALERT_SUCCESS",
            })
        } catch(err) {
            console.error('upload data produk eror : ', err)
        }
    }
}

export const doGetProduct = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type : "DO_SPIN"
            })

            const listProduct = await axios.get(mainUrl+'/user/product/list?p=1&rp=50')

            console.log('response list produck',listProduct.data)

            dispatch({
                type : "GET_DATA_PRODUCT",
                payload : listProduct.data
                
            })

            dispatch({
                type : "STOP_SPIN"
            })
        } catch (error) {
            console.error(error)
        }
    } 
}

export const addProductToCart = (note, qty, produkId) => {
    return async dispatch => {
        const token = localStorage.getItem('_token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        console.log(config)

        const date = {
            note : note,
            qty : qty,
            product_id : produkId
        }
        try {
            const cart = await axios.post(mainUrl+'/cart', date, config)
            if (cart.status === 200) {
                dispatch({
                    type : "DO_ALERT_SUCCESS",
                })
    
            } else {
                dispatch({
                    type : "DO_ALERT_ERROR",
                })
            }
        } catch(error) {
            console.error(error)
        }



    }
}

export const editUserCart = (note, qty, produkId, cartId) => {
    return async dispatch => {
        const token = localStorage.getItem('_token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        console.log(config)

        const data = {
            note : note,
            qty : qty,
            product_id : produkId
        }
        try {
            // alert(cartId)
            const editCart = await axios.put(mainUrl+'/cart/'+cartId, data, config)
            // // const cart = await axios.post(mainUrl+'/cart', date, config)
            if (editCart.status === 200) {
                dispatch({
                    type : "DO_ALERT_SUCCESS",
                })
    
            } else {
                dispatch({
                    type : "DO_ALERT_ERROR",
                })
            }
        } catch(error) {
            console.error(error)
        }

    }
}

export const getUserCart = () => {
    return async dispatch => {
        const token = localStorage.getItem('_token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const dataCart = await axios.get(mainUrl+'/cart/list', config)

        dispatch({
            type : "GET_DATA_CART",
            payload : dataCart.data
        })
    }
}

export const deleteUserCart = (id) => {
    return async dispatch => {
        try {

            dispatch({
                type : "DO_SPIN"
            })

            const token = localStorage.getItem('_token')

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }            

            console.log('delete sebelum')
            await axios.delete(mainUrl+'/cart/'+id, config)
            console.log('delete sesudah')

            const dataCart = await axios.get(mainUrl+'/cart/list', config)

            dispatch({
                type : "GET_DATA_CART",
                payload : dataCart.data
            })


            dispatch({
                type : "STOP_SPIN"
            })

        } catch (error) {
            console.error(error)
        }

    }
}

export const checkOutUserCart = () => {
    return async (dispatch, getState) => {
        try {
            await getUserCart()

            const token = localStorage.getItem('_token')

            const config = {
                headers: {
                    
                    'Authorization': `Bearer ${token}`
                }
            }

            const data = {
                do_trasaction : true
            }

            await axios.post(mainUrl+'/user/transaction', data, config)
            // console.log('ini data cart gan ==> ',dataCart)

        } catch (error) {
            console.error(error);
        }
    }
}

export const getDataTransaction = () => {
    return async dispatch => {
        const token = localStorage.getItem('_token')

        const config = {
            headers: {
                
                'Authorization': `Bearer ${token}`
            }
        }

        const trx = await axios.get(mainUrl+'/user/transaction/list', config)
        console.log(trx)
        dispatch({
            type : "GET_DATA_TRANSACTION",
            payload : trx.data
        })


    } 
}

export const getDataByCategory = (categoryID) => {
    return async (dispatch) => {
        try {
            dispatch({
                type : "DO_SPIN"
            })

            const listProduct = await axios.get(mainUrl+'/user/product/category/'+categoryID)

            console.log('response list produck',listProduct.data)

            dispatch({
                type : "GET_DATA_PRODUCT",
                payload : listProduct.data
                
            })

            dispatch({
                type : "STOP_SPIN"
            })
        } catch (error) {
            console.error(error)
        }
    }
}