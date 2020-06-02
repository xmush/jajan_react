import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/productComponen/addProduct'
import {getCategory, handleChange, handleFileChange, doPostProduct, hideSwal} from '../redux/actions/globalAction'
import { doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class ProductAdd extends React.Component {
    checkAddProduk = async () => {
        if(this.props.showAlert) {
            await Swal.fire({
                title: 'Success!',
                text: 'Add Product successfully!!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then((result) => {
                this.props.history.push("/product");
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
                this.props.history.push("/product");
            }).then(() => {
                this.props.hideSwal()
            })
        }
    }

    doSubmitForm = async (e) => {
        e.preventDefault();
        
        await this.props.doPostProduct()

        this.checkAddProduk()
        
    }

    componentDidMount() {
        this.props.getCategory()
    }

    render() {
        return(
            <React.Fragment>
                <Header 
                dataCategory = {this.props.category}
                loginStatus = {this.props.loginStatus}
                logOut = {this.props.doLogout}
                dataUser = {this.props.dataUser}
                />
                <HeadSection
                dataCategory = {this.props.category}
                handleChange = {this.props.handleChange}
                handleFileChange = {this.props.handleFileChange}
                doSubmitForm = {this.doSubmitForm}
                doSpin = {this.props.showSpin}
                alertSuccess = {this.props.showAlert}
                alertError = {this.props.showAlertError}
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
        showSpin : state.global.showSpinner,
        showAlert : state.global.showSuccess,
        showAlertError : state.global.showEror,

    }
}

const mapDispatchToProps = {
    getCategory,
    handleChange,
    handleFileChange,
    doPostProduct,
    hideSwal,
    doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);