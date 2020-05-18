import React from 'react'
import numeral from 'numeral';
import { Link } from 'react-router-dom'
import axios from 'axios'

const HeadSection = (props) => {
    const province = async () => {
        const url = process.env.REACT_APP_RAJA_ONGKIR_URL
        const key = process.env.REACT_APP_RAJA_ONGKIR_KEY
        const dataProv = await axios.get('https://cors-anywhere.herokuapp.com/'+url+'/province?key='+key)

        return dataProv.rajaongkir.results
    }

    // console.log(province)

    const xx = 0
    const totalAmount = props.dataCart.reduce((res, elem) => {
        return res + (elem.produk.price * elem.qty)
    }, 0)
    console.log(xx)
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
                        List User Cart
                        </h3>
                    </div>
                    {/* <div className="loader"></div> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 d-flex justify-content-center">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className="text-center">Produk</th>
                                            <th scope="col" className="text-center">Qty</th>
                                            <th scope="col" className="text-center">Price</th>
                                            <th scope="col" className="text-center">Total Price</th>
                                            <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                        {props.dataCart.map((elem, index) => (
                                            <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td className="text-left">{elem.produk.name}</td>
                                            <td className="text-center">{elem.qty}</td>
                                            <td className="text-right">Rp. {numeral(elem.produk.price).format(0.0)},00</td>
                                            <td className="text-right">Rp. {numeral(elem.produk.price * elem.qty).format(0.0)},00</td>
                                            <td className="text-right">
                                                <button type="button" className="btn btn-warning mr-1"
                                                onClick={() =>props.cartIsClicked(elem.produk.id, elem.produk.name, elem.produk.stock, elem.qty, elem.id)}
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                onClick={() =>props.deleteUserCart(elem.id)}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                            </tr>

                                        ))}
                                        <tr>
                                            <th colSpan="4">Total Amount</th>
                                        <th className="text-right">
                                        Rp. {numeral(totalAmount).format(0,0)},00
                                        </th>
                                        <th></th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Link type="button" className="btn btn-info" to="/transaction"
                                onClick={props.checkOutUserCart}
                                >
                                    CheckOut
                                </Link>
                            </div>
                        </div>
                
                    </div>
            
                </div>
            </section>
        )        
    }
}

export default HeadSection;