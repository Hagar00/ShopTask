import React, { Fragment, useState ,useEffect } from 'react';
import './shop.css';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
function Shop() {

    const [products,setProducts]= useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(()=>{
         setTimeout(()=>{
            const getProductsData= async()=>{
            const reqData= await fetch('https://dummyjson.com/products');
            const resData= await reqData.json();
            setProducts(resData.products);
           console.log(resData.products);
        }
        getProductsData();
        },500);
    }, []);

   

// feltring data 
 const filterDataByCategory = () => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(item => item.category === selectedCategory);
  };
// get all product 
 const handleGetAllProducts = () => {
    console.log(products);
        setSelectedCategory('');
        return products;
  };
// delete function 
const deleteAction = (id)=>{
        const update = products.filter( post => post.id !== id);
          setProducts(update);
        }

  return (
    <Fragment>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src={logo} alt="not found" width="55" height="53" className="d-inline-block "/>
                   shopping
                </Link>
                <h5 className='m-auto'>  {selectedCategory} </h5>
               
            </div>
        </nav>
        <div className='container-fluid'>
            <div className='row'>
                <div className='left-setting-shop col-lg-3 col-md-4 col-sm-6 bg-light ps-5 pt-5 ' >
                    <button className='  mb-4 d-block'
                        onClick= {handleGetAllProducts }>
                         All category 
                    </button>

                    <button className=' mb-4 d-block'
                        onClick={() => setSelectedCategory('smartphones')}> 
                        smart phones 
                    </button>

                    <button className=' mb-4 d-block'
                        onClick={() => setSelectedCategory('laptops')}> 
                        laptops 
                    </button>

                    <button className=' mb-4 d-block' 
                        onClick={() => setSelectedCategory('fragrances')}> 
                        fragrances 
                    </button>

                    <button className=' mb-4 d-block'
                       onClick={() => setSelectedCategory('skincare')}> 
                       skincare 
                    </button>
                    <button className='  mb-4 d-block'
                        onClick={() => setSelectedCategory('groceries')}>
                        groceries 
                    </button>
                    <button className='  mb-5 d-block'
                        onClick={() => setSelectedCategory('home-decoration')}> 
                        home decoration 
                    </button>
                    <Link to='/AddProducts'  className=' mt-3 text-align-center add'> Add New Product </Link>
                </div>
                
                <div className='right-products-shop col-lg-9 cl-md-8 col-sm-6 mt-5'>
                   
                    <div className='row'>
                        {products && filterDataByCategory().map(product=>(
                                
                             <div key={product.id} className='col-lg-4 col-md-6 col-sm-12 home-product-content'>
                                    <img src={product.thumbnail} alt='not found ' className='home-product-img'></img>
                                    <div className='row mt-2'>
                                        <div className='title-left col-6'>
                                            <h6> { product.title} </h6>
                                        </div>
                                        <div className='price-right col-6'>
                                            <h6 className='price-right'> { product.price} $ </h6>
                                        </div>

                                    </div>
                                    <div className='row mt-3 mb-5 button-home'>
                                        <div className='show-button-left col-lg-6 col-md-12 col-sm-12 mt-4 mb-1'> 
                                            <Link to={`/singleProduct/${product.id}`} className="read-more"> read more </Link>
                                        </div>
                                        <div className='delete-button-right col-lg-6 col-md-12 col-sm-12 mt-3'>
                                            <button type="button" onClick={ ()=> deleteAction(product.id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                             </div>
                         ))}
                    </div>
                    
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Shop