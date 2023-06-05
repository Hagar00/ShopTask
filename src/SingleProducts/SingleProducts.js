import React, { Fragment, useState ,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Single.css';

function SingleProducts() {
    const {id }= useParams();
    const [productData,setProductData]= useState({});
    console.log(id);
     useEffect(() => {
        const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProductData(data);
        
    };
    fetchProduct();        
  }, [id]);

  console.log(productData);
  return (
    <Fragment>
        {
            productData?(
                 <div className=' container d-flex w-100  justify-content-center align-items-center single-content border bg-light pt-5 pb-5 '>
                        <div className='row pt-5 pb-5 '>
                            <div className='left-single-photo col-lg-5 col-md-4 col-sm-12' >
                                 <img src={productData.thumbnail} alt='not found ' className='img-single'></img>
                            </div>
                            <div className='right-single-details col-lg-7 col-md-8 col-sm-12 pt-3'>
                                <div className='row'>
                                    <div className='title-left col-6'>
                                        <h6> { productData.title} </h6>
                                    </div>
                                    <div className='price-right col-6'>
                                        <h5> { productData.price} $ </h5>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h5>description : </h5> <h6>{ productData.description}</h6>
                                    <h5> category :  </h5><h6>{ productData.category} </h6>
                                    <h5> brand : </h5> <h6> { productData.brand}</h6>
                                </div>  
                            </div>
                              <div className='mt-5 row'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <Link to='/products' className='back'> back to home </Link>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 div-update'>
                                    <Link to='/products' className='back update'> update data  </Link>
                                </div>
                            </div>
                        </div>
                  </div>
            ):(
                <h5> Loading ..... </h5>
            )
        }
       

    </Fragment>
  )
}

export default SingleProducts;