import React from 'react'
import Swal from 'sweetalert2'
import { getCategory, handleChange } from '../redux/actions/globalAction'
import RegisterForm from '../components/registerComponent/RegisterForm'

import { Link } from 'react-router-dom'
import { doLogin, doLogout, doRegister } from '../redux/actions/userAction'
import { connect } from 'react-redux'

class Daftar extends React.Component {
    checkRegister = () => {
        if(this.props.isRegister) {
            Swal.fire({
                title: 'Success!',
                text: 'Register successfully!!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            this.props.history.push("/");
        }
    }

    submitForm = async(e) => {
        e.preventDefault();
        
        await this.props.doRegister();
        
        this.checkRegister()
    }

    componentDidMount() {
    this.checkRegister()
    }

    render() {
        return(
            <React.Fragment>
                <div className="full-height">
                    <div className="col-12 text-center text-white body-login">
                        <form className="form-signin" method="post" onSubmit={this.submitForm}>
                            <img className="mb-4" src="img/logo/O2store.png" alt="" width="72" height="72" />
                            
                            <React.Fragment>
                                <RegisterForm 
                                handleChange = {this.props.handleChange}
                                />
                            </React.Fragment>
                            <p className="mt-5 mb-3 text-white">xmush &copy; 2020</p>
                        </form>    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        category : state.global.category,
        inputUsername : state.global.inputUsername,
        loginStatus : state.user.loginStatus,   
        token : state.user.token,
        isRegister : state.user.isRegister
        // inputUser
    }
}

const mapDispatchToProps = {
    getCategory,
    handleChange,
    doLogin,
    doLogout,
    doRegister

}

export default connect(mapStateToProps, mapDispatchToProps)(Daftar);
