import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/productComponen/HeadSection'
import { getCategory, doGetProduct, addProductToCart, hideSwal, getUserCart, getDataByCategory } from '../redux/actions/globalAction'
import { doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class Product extends React.Component {

    checkIsLogin = () => {
        // if(localStorage.)
        const isLogin = localStorage.getItem('isLogin')
        if (isLogin !== 'true') {
            this.props.history.push('/login')
        } 

    }

    checkAddToChart = async () => {
        this.checkIsLogin()
        if(this.props.showAlert) {
            await Swal.fire({
                title: 'Success!',
                text: 'Add Product successfully!!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then((result) => {
                this.props.history.replace("/cart");
            }).then(() => {
                this.props.hideSwal()
            })
        }
        else if (this.props.showEror) {
            await Swal.fire({
                title: 'Failed!',
                text: 'Add Product Failed!!',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => {
                this.props.history.replace("/cart");
            }).then(() => {
                this.props.hideSwal()
            })
        }
    }
    

    cartIsClicked = async (productId, productName, productStock) => {
        await Swal.fire({
            title: `${productName}`,
            html:
              'Note : <input type="text" id="note" class="swal2-input" placeholder="note untuk penjual">Qty' +
              `<input type="range" min=1 max=${productStock} id="produkQty" value=1 class="swal2-input" oninput="produkOutQty.value = produkQty.value">`+
              '<output name="produkOutQty" id="produkOutQty">1</output>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText : 'Add to cart',
            preConfirm: async () => {
                const note = document.getElementById('note').value
                const qty = document.getElementById('produkQty').value
                // this.showAlert()
                await this.props.addProductToCart(note, qty, productId)
                // await this.props.addProductToCart(note, qty, productId)
                
                return {
                    note : document.getElementById('note').value,
                    qty : document.getElementById('produkQty').value
              }
            }
          })

        this.checkAddToChart()
        
    }
    // shouldComponentUpdate() {
    //     return false
    // }


    componentDidMount() {
        this.props.getCategory()
        this.props.doGetProduct()
        this.props.getUserCart()
    }

    render() {
        return(
            <React.Fragment>
                <Header 
                dataCategory = {this.props.category}
                loginStatus = {this.props.loginStatus}
                logOut = {this.props.doLogout}
                getDataByCategory = {this.props.getDataByCategory}
                dataUser = {this.props.dataUser}
                cartLength = {this.props.cartLength.length}

                />
                <HeadSection
                showSpin = {this.props.showSpin}
                dataProduct = {this.props.dataProduct}
                cartIsClicked = {this.cartIsClicked}
                
                />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.global.category,
        loginStatus : state.user.loginStatus,
        dataUser : state.user.dataUser,
        dataProduct : state.global.dataProduct,
        showSpin : state.global.showSpinner,
        showAlert : state.global.showSuccess,
        showAlertError : state.global.showEror,
        cartLength : state.global.dataCart
    }
}

const mapDispatchToProps = {
    getCategory,
    doGetProduct,
    addProductToCart,
    hideSwal,
    getUserCart,
    getDataByCategory,
    doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);