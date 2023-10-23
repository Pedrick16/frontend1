import { useEffect } from 'react';
import './dashboard.scss'; // Import your SCSS file here
import Logout from '../../components/Logout';
import UpdateModal from '../../components/UpdateModal';
import AddProductModal from '../../components/AddProductModal';
import { useProductStore } from '../../store/Product';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';


const Dashboard = () => {
    //from store
    const { userInfo, setUserInfo } = useContext(UserContext)
    const {allProduct, fetchAllProduct,  editProduct, deleteProduct} = useProductStore()
    

    // get all products
    useEffect(() => {
      fetchAllProduct()
   

    },[fetchAllProduct]);

    useEffect(() => {
      setUserInfo(userInfo)
    },[]);


    


  const handleEdit =  (id) => {
    editProduct(id)
   


  }

  const handleDelete = (id) => {
    deleteProduct(id)
    fetchAllProduct()



  }

  console.log(userInfo)

  





  return (
    <div className="__dashboard">

      <div className="__content container">
        <div className="header d-flex align-items-center justify-content-between py-3">
        {userInfo ? (
          <h3>Dashboard | {userInfo.usertype}</h3>
        ) : (
          <h3>Loading...</h3>
        )}
          <div>
          <button className='btn  btn-success me-1' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Add Product</button>
          
          <Logout/>
        

          </div>
        
        </div>
        <table className="table  table-striped table-hover  text-center">
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
          <tbody >
            {allProduct.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.product_name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>{new Date(item.createdOn).toLocaleDateString()}</td>
                <td>
                  <div><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => handleEdit(item._id)} >Edit</button><button className='btn btn-danger ms-1' onClick={() => handleDelete(item._id)}>Delete</button></div>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    <AddProductModal/>
    <UpdateModal/>
    
    </div>


  );

  
};

export default Dashboard;
