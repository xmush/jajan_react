import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = (props) => {
    return (
        <React.Fragment>
            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
            <input type="text" id="username" className="form-control mb-3" name="regisUsername" onChange={props.handleChange} placeholder="Username" required autoFocus />
            <input type="password" id="password" className="form-control mb-3" name="regisPassword" onChange={props.handleChange} placeholder="Password" required autoFocus />
            <input type="password" id="password-confirm" className="form-control mb-3" name="regisPasswordConfirm" onChange={props.handleChange} placeholder="Password Confirm" required autoFocus />
            <input type="email" id="email" className="form-control mb-3" placeholder="Email" name="regisEmail" onChange={props.handleChange} required autoFocus />
            <input type="text" id="full_name" className="form-control mb-3" placeholder="Full Name" name="regisFullname" onChange={props.handleChange} required autoFocus />
            <input type="text" id="address" className="form-control mb-3" placeholder="Address" name="regisAddress" onChange={props.handleChange} required autoFocus />
            <input type="text" id="contact" className="form-control mb-3" placeholder="Contact" name="regisContact" onChange={props.handleChange} required autoFocus />
            <select className="form-control mb-3" id="Gender" name="regisGender" onChange={props.handleChange} required>
                <option>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>

            <button className="btn btn-lg btn-danger btn-block" type="submit">Register</button>

            <div className="btn-group bg-pastel-red mt-3 w-100" role="group" aria-label="Basic example">
            <Link to="/" type="button" className="btn text-white bg-pastel-red">&laquo; Home</Link>
            <Link to="/login" type="button" className="btn text-white bg-pastel-red">Login &raquo;</Link>
            </div>
        </React.Fragment>
    )
}

export default RegisterForm
