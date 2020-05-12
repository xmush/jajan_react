import React from 'react'
import { getCategory, handleChange } from '../redux/actions/globalAction'
import { Link } from 'react-router-dom'
import { doLogin, doLogout } from '../redux/actions/userAction'
import { connect } from 'react-redux'

class Login extends React.Component {

    checkLogin = () => {
        const is_login = this.props.loginStatus;
        if (is_login) {
            localStorage.setItem("isLogin", this.props.loginStatus);
            localStorage.setItem("_token", this.props.token);
            this.props.history.push("/");
        } else {
            localStorage.clear();
        }
    }
    postLogin = async () => {
        await this.props.doLogin();
        this.checkLogin()
    };

    componentDidMount() {
        this.checkLogin()
        this.props.getCategory()
        // this.props.handleChange(e)
    }

    render() {
        return(
            <React.Fragment>
                <div className="full-height">
                    <div className="col-12 text-center text-white body-login">
                        <form className="form-signin">
                            <img className="mb-4" src="img/logo/O2store.png" alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <input type="text" id="username" className="form-control" placeholder="Username" name="inputUsername" onChange={this.props.handleChange} required autoFocus />
                            <input type="password" id="password" className="form-control" placeholder="Password" name="inputPassword" onChange={this.props.handleChange} required />
                            <div className="checkbox mb-3">
                            </div>
                            <button className="btn btn-lg btn-danger btn-block"  onClick={() => this.postLogin()} type="button">Sign in</button>
                            <p className="mt-5 mb-3 text-white">xmush &copy; 2020</p>
                        </form>    
                    </div>
                </div>
                {/* <Header
                dataCategory = {this.props.category}
                />
                <div>
                    This Login Page
                    <form action="" className="pt-5 mt-5">
                        <input type="text" name="inputUsername" onChange={this.props.handleChange}/><br/>
                        <input type="password" name="inputPassword" onChange={this.props.handleChange}/><br/>
                        <button type="button" onClick={() => this.postLogin()}>Login</button>
                    </form>
                </div> */}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        category : state.global.category,
        inputUsername : state.global.inputUsername,
        loginStatus : state.user.loginStatus,   
        token : state.user.token
        // inputUser
    }
}

const mapDispatchToProps = {
    getCategory,
    handleChange,
    doLogin,
    doLogout

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
