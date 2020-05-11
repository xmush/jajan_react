import React from 'react'
import { Link } from 'react-router-dom'


const HeadSection = () => {
    return(
        <section className="head-content">
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h3>
                    Selamat datang di O2 Store, Market Place jajanan tradisional
                    </h3>
                </div>
                <div className="row">
            
                    <div className="col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="img/slider/g1.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/slider/g2.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/slider/g3.png" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/slider/g4.png" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="img/slider/g5.png" alt="Third slide" />
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
            
                    </div>    
                    <div className="col-lg-6">
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 mb-2">
                        <div className="card h-100">
                            <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                            <div className="card-footer">
                            $24.99
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                        <div className="card h-100">
                            <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                            <div className="card-footer">
                            $24.99
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                        <div className="card h-100">
                            <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                            <div className="card-footer">
                            $24.99
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-2">
                        <div className="card h-100">
                            <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                            <div className="card-footer">
                            $24.99
                            </div>
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