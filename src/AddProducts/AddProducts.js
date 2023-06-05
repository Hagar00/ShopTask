import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProducts() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState('');
  const [images, setImages] = useState('');

  const navigate = useNavigate();

  function handleImage (e){
      console.log(e.target.files)
      setImages(e.target.files[0])
    }
  function handleThumbnail(e){
    console.log(e.target.files)
    setThumbnail(e.target.files[0])
  }
 function handleAddSubmit(event){
    event.preventDefault();    
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      title: title,
      description:description,
      price:price,
      brand:brand,
      category:category,
      thumbnail:thumbnail,
      images : images
  })
})
.then(
    res => res.json(),
    alert("product added successfully..."),
    navigate('/products')
  )
.then(console.log);

  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleAddSubmit}>
            <div>
            <label htmlFor='title'> title : </label>
            <input type='text' name='title' className='form-control mt-2'
           onChange={(e)=> setTitle( e.target.value )}/>

          </div>

          <div className='mb-3'>
            <label htmlFor='price' name='price'>price : </label>
            <input type='text' name='price' className='form-control mt-2'
           onChange={e=> setPrice( e.target.value)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='category' name='category'>category : </label>
            <input type='text' name='category' className='form-control mt-2'
           onChange={e=> setCategory(  e.target.value )}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='description' name='description'> description : </label>
            <input type='text' name='description' className='form-control mt-2'
            onChange={e=> setDescription( e.target.value )}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='brand' name='brand'> brand : </label>
            <input type='text' name='brand' className='form-control mt-2'
            onChange={e=> setBrand( e.target.value )}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='thumbnail' name='thumbnail'> image : </label>
            <input type='file' name='thumbnail' className='form-control mt-2'
            onChange={handleThumbnail}/>
          </div>

           <div className='mb-3'>
            <label htmlFor='images' name='images'> images: </label>
            <input type='file' name='images' className='form-control mt-2'
            onChange={handleImage}/>
          </div>

          <button className='btn btn-info'
          disabled =
          { !title|| !description|| !price || !brand || !category || !thumbnail || !images}> submit </button>
        </form>
          
      </div>
    </div>
  )
}

export default AddProducts