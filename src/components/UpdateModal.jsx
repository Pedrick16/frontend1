import React from 'react'
import { useProductStore } from '../store/Product'
import { useState, useEffect } from 'react'


const UpdateModal = () => {
    const { updateProduct, fetchAllProduct, getEditProduct} = useProductStore()
    const [filterItem, setFilterItem] = useState(getEditProduct)

 
   
   

     
    useEffect(() => {
        setFilterItem(getEditProduct)
    }, [getEditProduct]);

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        await updateProduct(filterItem._id, filterItem);
  
        // to reload again the allProduct
        fetchAllProduct()
     
        
    };





  return (
    <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <form onSubmit={(e) => handleUpdateProduct(e)}>
          <div className="modal-body">
            <div className="container">
               
                <div className="py-3">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className='form-control'  value={filterItem.product_name} onChange={(e) => setFilterItem({...filterItem, product_name:e.target.value})}  required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Description</label>
                    <input type="text" className='form-control' value={filterItem.description} onChange={(e) => setFilterItem({...filterItem,description:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Price</label>
                    <input type="number" className='form-control'  value={filterItem.price} onChange={(e) => setFilterItem({...filterItem, price:e.target.value})}  required/>
                </div>
                <div className="py-3">
                <label htmlFor="">Status</label>
                  <select value={filterItem.status} onChange={(e) => setFilterItem({...filterItem, status:e.target.value})}  className='form-control'required>
                    <option ></option>
                    {filterItem.status === 'active' ? (
                      <>
                         <option selected value='active'>active</option>
                         <option value='inactive'>inactive</option>
                      </>
                    ): (
                      <>
                      <option selected  value='inactive'>inactive</option>
                      <option  value='active'>active</option>
                     
                      </>
                    )}
                  
                  </select>
                
               
                </div>
             
            
                <button className='btn btn-secondary form-control'   type='submit' data-bs-dismiss="modal" >Update Product</button>
            </div>
          </div>
        
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal