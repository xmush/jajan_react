import React from 'react'
import { Link } from 'react-router-dom'


const HeadSection = (props) => {
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const servUrl = process.env.REACT_APP_SERVER_FILE_STORAGE_URL
    console.log('data user ____', dataUser)
    return(
        <section className="head-content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 border">
                        <div className="d-flex justify-content-center mt-4">
                            <div className="col-lg-6 col-sm-12 text-center">
                                    <div>
                                        <img className="mb-4 App-logo" src={dataUser.profil_img_path} alt="" width="150" height="150" />
                                    </div>
                                    <div className="mb-3 border rounded p-3">
                                        <p className="text-muted m-0">
                                            Username
                                        </p>
                                        <strong className="text-muted">
                                            {dataUser.username}
                                        </strong>
                                    </div>
                                    <div className="mb-3 border rounded p-3">
                                        <p className="text-muted m-0">
                                            email
                                        </p>
                                        <strong className="text-muted">
                                            {dataUser.email}
                                        </strong>
                                    </div>
                                    <div className="mb-3 border rounded p-3">
                                        <p className="text-muted m-0">
                                            Full name
                                        </p>
                                        <strong className="text-muted">
                                            {dataUser.biodata.fullname}
                                        </strong>
                                    </div>                                
                                    <div className="">
                                        <p className="mt-2 mb-3 text-muted">&copy; xmush-2019</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </section>
    )
}

export default HeadSection;