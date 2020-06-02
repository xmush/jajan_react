import React from 'react'
import { Link } from 'react-router-dom'


const HeadSection = (props) => {

    if (props.doSpin) {
        return(
            <section className="head-content">
                <div className="container">
                    <div className="col-lg-12 text-center">
                        <h3>
                        Add Product
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
                        Add Product
                        </h3>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                        <form method="submit" onSubmit={props.doSubmitForm}>
                            <div className="form-group">
                                <label htmlFor="">Product Name <small className="text-danger" title="required">*</small></label>
                                <input type="text" className="form-control" id="produkName" name="produkName" placeholder="Enter Product Name" 
                                onChange={props.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Description <small className="text-danger" title="required">*</small></label>
                                <textarea className="form-control" id="produkDeskripsi" name="produkDeskripsi" rows="3" placeholder="Enter Product Description"
                                onChange={props.handleChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Category <small className="text-danger" title="required">*</small></label>
                                <select className="form-control" id="produkCategory" name="produkCategory"
                                onChange={props.handleChange}
                                >
                                    <option>Enter Product Category</option>
                                    {
                                    props.dataCategory.map((elem, index) => (
                                        <option value={elem.id} key={index}>{elem.name}</option>
                                    ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Price <small className="text-danger" title="required">*</small></label>
                                <input type="number" className="form-control" id="produkPrice" name="produkPrice" placeholder="Enter Product Price" 
                                onChange={props.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Stock <small className="text-danger" title="required">*</small></label>
                                <input type="number" className="form-control" id="produkStock" name="produkStock" placeholder="Enter Product Stock" 
                                onChange={props.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Image <small className="text-danger" title="required">*</small></label>
                                <input type="file" className="form-control-file" id="produkPicture" name="produkPicture" placeholder="Input Product Image"
                                onChange={props.handleFileChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Product Image Description <small className="text-danger" title="required">*</small></label>
                                <textarea className="form-control" id="produkImageDesc" name="produkImageDesc" rows="3" placeholder="Enter Image Product Description"
                                onChange={props.handleChange}
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary mr-3"
                            // onClick={props.doPostProduct}
                            >Submit</button>
                            <button type="reset" className="btn btn-secondary">Submit</button>
                            </form>
                        </div>
                
                    </div>
            
                </div>
            </section>
        )
    }
}

export default HeadSection;