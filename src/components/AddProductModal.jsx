import React from 'react'
import { useState, useRef } from 'react'
import { useProductStore } from '../store/Product'

const AddProductModal = () => {
    const {addProduct,  fetchAllProduct} = useProductStore()
    const [data, setData] = useState({
        product_name:'',
        description:'',
        price:'',
        status:''

    })

    const inputRefs = {
      product_name: useRef(null),
      description: useRef(null),
      price: useRef(null),
      status: useRef(null),
    };
    
    const handleClose = () => {
      inputRefs.product_name.current.value = '';
      inputRefs.description.current.value = '';
      inputRefs.price.current.value = '';
      inputRefs.status.current.value = '';
    };

    
    const handleAddproduct = (e) => {
      e.preventDefault();
      addProduct(data)
      fetchAllProduct()
      handleClose()
     
  }



  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          {/* <form onSubmit={(e) => handleAddProduct(e)}> */}
          <form onSubmit={(e) => handleAddproduct(e)}>
          <div className="modal-body">
            <div className="container">
               
                <div className="py-3">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className='form-control' ref={inputRefs.product_name} onChange={(e) => setData({...data, product_name:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Description</label>
                    <input type="text" className='form-control' ref={inputRefs.description}  onChange={(e) => setData({...data, description:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Price</label>
                    <input type="number" className='form-control' ref={inputRefs.price}  onChange={(e) => setData({...data, price:e.target.value})} required/>
                </div>
                <div className="py-3">
                <label htmlFor="">Status</label>
                  <select ref={inputRefs.status}  onChange={(e) => setData({...data, status:e.target.value})} className='form-control'required>
                    <option ></option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>
              
                  </select>
                
               
                </div>
             
            
                <button className='btn btn-secondary form-control'   type='submit' data-bs-dismiss="modal">Add product</button>
            </div>
          </div>
       
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProductModal