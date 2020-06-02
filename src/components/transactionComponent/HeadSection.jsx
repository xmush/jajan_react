import React from 'react'
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import axios from 'axios'

const HeadSection = (props) => {
    console.log('transa page ',props)
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
                        List User Transaction
                        </h3>
                    </div>
                    {/* <div className="loader"></div> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 d-flex justify-content-center">
                                <div id="accordion" className="w-100">
                                    {props.dataTransaction.map((elem, index) => (
                                        <div className="card" key={index}>
                                            <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-default w-100 text-left" data-toggle="collapse" data-target={'#collapse'+elem.id} aria-expanded="false" aria-controls={'collapse'+elem.id}>
                                    <span class="badge badge-danger"> #{index+1} { elem.created_at}</span>
                                                </button>
                                            </h5>
                                            </div>

                                            <div id={'collapse'+elem.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col" className="text-center">Produk</th>
                                                            <th scope="col" className="text-center">Qty</th>
                                                            <th scope="col" className="text-center">Price</th>
                                                            <th scope="col" className="text-center">Total Price</th>
                                                            <th scope="col">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        
                                                        {elem.detail.map((elem, index) => (
                                                            <tr key={index}>
                                                            <th scope="row">{index+1}</th>
                                                            <td className="text-left">{elem.produk.name}</td>
                                                            <td className="text-center">{elem.qty}</td>
                                                            <td className="text-right">Rp. {numeral(elem.produk.price).format(0.0)},00</td>
                                                            <td className="text-right">Rp. {numeral(elem.produk.price * elem.qty).format(0.0)},00</td>
                                                            <td className="text-right">
                                                            <span class="badge badge-danger">{elem.payment}</span>
                                                            </td>
                                                            </tr>

                                                        ))}
                                                        <tr>
                                                            <th colSpan="4">Total Amount</th>
                                                        <th className="text-right">
                                                        Rp. {numeral(elem.total_amount).format(0,0)},00
                                                        </th>
                                                        <th>
                                                        <span class="badge badge-pill badge-warning">{elem.payment_status}</span>
                                                        </th>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                
                    </div>
            
                </div>
            </section>
        )        
    }
}

export default HeadSection;