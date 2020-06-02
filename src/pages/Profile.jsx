import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSection from '../components/profileComponent/HeadSection'
import {getCategory} from '../redux/actions/globalAction'
import { doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'

class Profile extends React.Component {
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
                <HeadSection />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category : state.global.category,
        loginStatus : state.user.loginStatus,
        dataUser : state.user.dataUser
    }
}

const mapDispatchToProps = {
    getCategory,
    doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);