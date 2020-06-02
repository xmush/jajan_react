import React from 'react'
import numeral from 'numeral';
import { Link } from 'react-router-dom'


const HeadSection = (props) => {
    console.log(props.dataProduct)
    if (props.showSpin) {
        return(
            <section className="head-content">
                <div className="container">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <h3>
                        List Product
                        </h3>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <div className="loader"></div>
                    </div>
                </div>
            </section>
        )
    } else {
        return(
            <section className="head-content">
                <div className="container">
                    <div className="col-lg-12 text-center">
                        <h3>
                        List product
                        </h3>
                    </div>
                    {/* <div className="loader"></div> */}
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="row mt-4 d-flex justify-content-center">
                            {props.dataProduct.map((elem, index) => (
                            
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 my-2" key={index}>
                                <div className="card h-100">
                                    <Link to="#"><img className="card-img-top" src={elem.image.img_path} alt="" /></Link>
                                    <div className="card-body">
                                    {elem.name}
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">   
                                            <div className="price">
                                                Rp. {numeral(elem.price).format(0.0)},00
                                            </div>
                                            <div className=" cart"
                                            onClick={() => props.cartIsClicked(elem.id, elem.name, elem.stock)}
                                            >
                                                <i className="fas fa-cart-plus color-pastel-red"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                            )}
                        </div>
                        </div>
                
                    </div>
            
                </div>
            </section>
        )        
    }
}

export default HeadSection;