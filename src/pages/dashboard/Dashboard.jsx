import { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.scss'; // Import your SCSS file here
import Sidebar from '../../components/sidebar/Sidebar';

import Logout from '../../components/Logout';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';


import { useNavigate } from 'react-router-dom';




const Dashboard = () => {

    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [data, setData] = useState([]);
    const [filterItem, setFilterItem] = useState([])
    const [addProduct, setAddProduct] = useState({

        product_name:'',
        description:'',
        price:'',
        status:'',
    })

    









  
    // console.log('filter', filterItem)

    const handleUpdateProduct = async (e) => {
      e.preventDefault();
      console.log(filterItem)
      if (filterItem) {
        try {
          const { product_name, description, price, status } = filterItem;
          const id = filterItem._id
          
           const response =await axios.put(`/update-product/${id}`, {
            product_name,
            description,
            price,
            status,
          });
          const updatedIndex = data.findIndex(item => item._id === id);

          if (updatedIndex !== -1) {
            // Create a copy of the data array
            const updatedData = [...data];
           
            updatedData[updatedIndex] = response.data;
         
            setData(updatedData);
        }
         
  

        } catch (error) {
          console.error(error);
        }
      }
    };
    





  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/all-products');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {

  }, [data])

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`/edit-product/${id}`)
      console.log('response',response)
      setFilterItem(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  





  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(addProduct)
     const { product_name, description, price, status} = addProduct;
     try {
       const response = await axios.post('/add-product', {
        product_name,
        description,
        price,
        status
         
       });
       setData([...data, response.data])
   
       
       navigate("/dashboard");
     } catch (error) {
       console.log(error);
     }
   };



   const handleClose = () => {
    setAddProduct({})
   }

  return (
    <div className="__dashboard">
      <Sidebar />
      <div className="__content container">
        <div className="header d-flex align-items-center justify-content-between py-3">
          <h3>Dashboard</h3>
          <div>
          <button className='btn  btn-success me-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Product</button>
          
          <Logout/>
        

          </div>
        
        </div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.product_name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
            
                <td>{new Date(item.createdOn).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => handleEdit(item._id)} >Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={(e) => handleAddProduct(e)}>
          <div className="modal-body">
            <div className="container">
               
                <div className="py-3">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className='form-control' onChange={(e) => setAddProduct({...addProduct, product_name:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Description</label>
                    <input type="text" className='form-control' onChange={(e) => setAddProduct({...addProduct, description:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Price</label>
                    <input type="number" className='form-control' onChange={(e) => setAddProduct({...addProduct, price:e.target.value})} required/>
                </div>
                <div className="py-3">
                <label htmlFor="">Status</label>
                  <select onChange={(e) => setAddProduct({...addProduct, status:e.target.value})} className='form-control'required>
                    <option ></option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>
              
                  </select>
                
               
                </div>
             
            
                <button className='btn btn-secondary form-control'   type='submit' data-bs-dismiss="modal">Add product</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleClose} data-bs-dismiss="modal" >Close</button>
           
          </div>
          </form>
        </div>
      </div>
    </div>


    <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={(e) => handleUpdateProduct(e)}>
          <div className="modal-body">
            <div className="container">
               
                <div className="py-3">
                    <label htmlFor="">Product Name</label>
                    <input type="text" className='form-control' value={filterItem.product_name} onChange={(e) => setFilterItem({...filterItem, product_name:e.target.value})}  required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Description</label>
                    <input type="text" className='form-control' value={filterItem.description} onChange={(e) => setFilterItem({...filterItem,description:e.target.value})} required/>
                </div>
                <div className="py-3">
                    <label htmlFor="">Product Price</label>
                    <input type="number" className='form-control' value={filterItem.price} onChange={(e) => setFilterItem({...filterItem, price:e.target.value})}  required/>
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
             
            
                <button className='btn btn-secondary form-control'   type='submit' data-bs-dismiss="modal">Update Product</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleClose} data-bs-dismiss="modal" >Close</button>
           
          </div>
          </form>
        </div>
      </div>
    </div>

    


    

  
 




   
      
    </div>


  );

  
};

export default Dashboard;
