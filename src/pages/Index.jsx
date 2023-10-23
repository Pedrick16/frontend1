import React, { useEffect } from 'react'
import sampleImg from '../image/GreenDrop_Station_Aluminum_Can_Coke.jpg'

import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'
import { useProductStore } from '../store/Product'

const Index = () => {
    const {activeProduct, fetchActiveProduct } = useProductStore()

    useEffect(() => {
      fetchActiveProduct()
      }, []);
    
     

  return (
    <div className="container vh-100">
    <Navbar/>

    <div className='row pt-5'>
    
    {activeProduct.map((item) => (
        <div className="col-3 pb-2" key={item._id}>
        
        <div className="card" style={{ width: '18rem' }}>
          <img src={sampleImg} height={200} width={200} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.product_name} | PHP{item.price}</h5>
            
            <p className="card-text">{item.description}</p>
            <Link to={`/view-item/${item._id}`} className="btn btn-primary">View Item</Link>
         
          </div>
        </div>
      </div>

    ))}
    
  
    

  </div>
  

  </div>
  )
}

export default Index