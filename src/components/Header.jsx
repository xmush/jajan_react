import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    // console.log('ini local data user ',dataUser)
    const checkLocalStorage = () => {
        const localLoginStatus = localStorage.getItem('isLogin')
        const _token = localStorage.getItem('_token')
    
        if (localLoginStatus === "true" && _token != null) {
            console.log('ini check login sts',localLoginStatus)
            return localLoginStatus
        } 
    }

    const actionLogout = () => {
        console.log('try log out')
        localStorage.clear();
        props.logOut()       
    }
    const LoginLogout =() => {
        const localStrg = (checkLocalStorage()) ? true : false
        console.log('local storage : ',localStrg, props.loginStatus)
        if (!props.loginStatus && !localStrg) {
            return (
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </React.Fragment>
            )
        } else {
           return  (
                <React.Fragment>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user-circle fa-lg"></i> {dataUser.username}
                        </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/product/add"
                            >Add Produk</Link>
                            <Link className="dropdown-item" to="/transaction"
                            >Transaction</Link>
                            <Link className="dropdown-item" to="/login"
                            onClick = {actionLogout}
                            >Logout</Link>
                            <Link className="dropdown-item" to="/profile"
                            >
                                Profil
                            </Link>
                        </div>
                    </li>
                </React.Fragment>
            )
    
        }
            
    }
    console.log('ini console di Header : ', props.dataCategory)
    return(
        <React.Fragment>
            <header className="d-flex align-items-center font-weight-bold">
                <nav className="navbar navbar-expand-lg navbar-dark bg-pastel-red fixed-top">
                    <Link className="navbar-brand" to="/">
                    <img src="img/logo/O2store.png" className="logo" alt="" />
                    O2 Store
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-pastel-red p-3 shadowed" id="navbarResponsive">
                        <form className="form-inline my-2 my-lg-0 w-100 ml-0">
                        <input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <div className="d-flex align-items-center flex-row">
                                    <i className="fas fa-shopping-cart d-inline">
                                    </i>
                                    <span className="badge badge-danger ml-2">{props.cartLength}</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                props.dataCategory.map((elem, index) =>(
                                    <Link to={`/category/${elem.id}`} className="dropdown-item" key={index}
                                    onClick={() => props.getDataByCategory(elem.id)}
                                    >{elem.name}</Link>
                                ))
                            }
                            </div>
                        </li>
                        <LoginLogout />
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> */}
                        </ul>
                    </div>
                </nav>
            </header>            
        </React.Fragment>
    )
}

export default Header;