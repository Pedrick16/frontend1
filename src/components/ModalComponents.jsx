
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// const ModalComponents = () => {
//     const navigate = useNavigate()
//     const [data, setData] = useState({
//         product_name:'',
//         description:'',
//         price:'',
 

//     })

//    const handleAddProduct = async (e) => {
//     e.preventDefault();
//     console.log(data)
//      const { product_name, description, price} = data;
//      try {
//        await axios.post('/add-product', {
//          product_name,
//          description,
//          price,
       
//        });
//        navigate("/dashboard");
//      } catch (error) {
//        console.log(error);
//      }
//    };

//    const handleClose = () => {
//         setData({})
//    }


//   return (
//     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h1 className="modal-title fs-5" id="staticBackdropLabel">Add product</h1>
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <form onSubmit={(e) => handleAddProduct(e)}>
//           <div className="modal-body">
//             <div className="container">
               
//                 <div className="py-3">
//                     <label htmlFor="">Product Name</label>
//                     <input type="text" className='form-control' onChange={(e) => setData({...data, product_name:e.target.value})} />
//                 </div>
//                 <div className="py-3">
//                     <label htmlFor="">Product Description</label>
//                     <input type="text" className='form-control' onChange={(e) => setData({...data, description:e.target.value})} />
//                 </div>
//                 <div className="py-3">
//                     <label htmlFor="">Product Price</label>
//                     <input type="number" className='form-control' onChange={(e) => setData({...data, price:e.target.value})} />
//                 </div>
//                 <div className="py-3">
//                 {/* <label htmlFor="">Status</label> */}
//                 {/* <select  className='form-control'  onChange={(e) => setData({...data, status:e.target.value})}  required>
//                     <option></option>
//                     <option value="active" >active</option>
//                     <option value="inactive">inactive</option>
//                 </select> */}
//                 </div>
             
            
//                 <button className='btn btn-secondary form-control' >Add product</button>
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-danger" onClick={handleClose} data-bs-dismiss="modal" >Close</button>
           
//           </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ModalComponents;
