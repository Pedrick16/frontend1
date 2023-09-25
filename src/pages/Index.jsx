import React, { useEffect, useState } from 'react'
import sampleImg from '../image/GreenDrop_Station_Aluminum_Can_Coke.jpg'

import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Index = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('/get-active-products');
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        getData();
      }, []);
    
     

  return (
    <div className="container vh-100">
    <Navbar/>

    <div className='row pt-5'>
    
    {data.map((item) => (
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