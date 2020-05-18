import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/cartComponent/HeadSection'
import { getCategory, doGetProduct, editUserCart, hideSwal, getUserCart, deleteUserCart, checkOutUserCart} from '../redux/actions/globalAction'
import { doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class Cart extends React.Component {

    checkAddToChart = async () => {
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
    

    cartIsClicked = async (productId, productName, productStock, qty, cartId) => {
        await Swal.fire({
            title: `${productName}`,
            html:
              'Note : <input type="text" id="note" class="swal2-input" placeholder="note untuk penjual">Qty' +
              `<input type="range" min=1 max=${productStock} id="produkQty" value=${qty} class="swal2-input" oninput="produkOutQty.value = produkQty.value">`+
              `<output name="produkOutQty" id="produkOutQty">${qty}</output>`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText : 'Add to cart',
            preConfirm: async () => {
                const note = document.getElementById('note').value
                const qty = document.getElementById('produkQty').value
                // this.showAlert()
                await this.props.editUserCart(note, qty, productId, cartId)
                // await this.props.addProductToCart(note, qty, productId)
                
                return {
                    note : document.getElementById('note').value,
                    qty : document.getElementById('produkQty').value
              }
            }
          })

        this.checkAddToChart()
        
    }
    
    componentDidMount() {
        this.props.getCategory()
        this.props.doGetProduct()
        this.props.getUserCart()
    }

    // shouldComponentUpdate(prevProps) {
    //     if(prevProps !== this.props) {
    //         return true
    //     }
    //     // else if ()
    //     return false
    // }

    render() {
        return(
            <React.Fragment>
                <Header 
                dataCategory = {this.props.category}
                loginStatus = {this.props.loginStatus}
                logOut = {this.props.doLogout}
                dataUser = {this.props.dataUser}
                cartLength = {this.props.cartLength.length}
                />
                <HeadSection
                showSpin = {this.props.showSpin}
                dataCart = {this.props.cartLength}
                cartIsClicked = {this.cartIsClicked}
                deleteUserCart = {this.props.deleteUserCart}
                checkOutUserCart = {this.props.checkOutUserCart}
                
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
    editUserCart,
    hideSwal,
    getUserCart,
    deleteUserCart,
    checkOutUserCart,
    doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);