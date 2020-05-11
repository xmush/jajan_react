import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    console.log('ini console di Header : ', props.dataCategory)
    return(
        <React.Fragment>
            <header className="d-flex align-items-center font-weight-bold">
                <nav className="navbar navbar-expand-lg navbar-dark bg-pastel-red fixed-top">
                    <Link className="navbar-brand" to="#">
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
                            <Link className="nav-link" to="#"><i className="fas fa-shopping-cart"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Product</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                props.dataCategory.map((elem, index) =>(
                                    <Link to={`/category/${elem.id}`} className="dropdown-item" key={index}>{elem.name}</Link>
                                ))
                            }
                            {/* <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Something else here</Link> */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>            
        </React.Fragment>
    )
}

export default Header;