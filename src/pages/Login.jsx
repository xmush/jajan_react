import React from 'react'
import Header from '../components/Header'
import { getCategory, handleChange } from '../redux/actions/globalAction'
import { doLogin } from '../redux/actions/userAction'
import { connect } from 'react-redux'

class Login extends React.Component {

    postLogin = async () => {
        // const loginBefore = this.props.login;
        // console.log(this.props)
        await this.props.doLogin();
        // console.log(this.props.login)
        // const is_login = this.props.login;
        // if (is_login) {
        //     this.props.history.push("/profile");
        // }
    };

    componentDidMount() {
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
        // inputUser
    }
}

const mapDispatchToProps = {
    getCategory,
    handleChange,
    doLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
