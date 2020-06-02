import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/transactionComponent/HeadSection'
import { getCategory, doGetProduct, editUserCart, hideSwal, getUserCart, getDataTransaction } from '../redux/actions/globalAction'
import { doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class Transaction extends React.Component {

   
    componentDidMount() {
        this.props.getCategory()
        this.props.getUserCart()
        this.props.getDataTransaction()
    }

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
                dataTransaction = {this.props.dataTransaction}
                
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
        cartLength : state.global.dataCart,
        dataTransaction : state.global.dataTransaction
    }
}

const mapDispatchToProps = {
    getCategory,
    doGetProduct,
    editUserCart,
    hideSwal,
    getUserCart,
    getDataTransaction,
    doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);