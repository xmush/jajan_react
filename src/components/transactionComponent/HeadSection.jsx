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
                                    {props.dataTransaction.map((elem) => (
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-default" data-toggle="collapse" data-target={'#collapse'+elem.id} aria-expanded="false" aria-controls={'collapse'+elem.id}>
                                                {elem.trx_code}
                                                </button><span class="badge badge-danger">{ elem.created_at}</span>
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
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Collapsible Group Item #2
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Collapsible Group Item #3
                                            </button>
                                        </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
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
}

export default HeadSection;