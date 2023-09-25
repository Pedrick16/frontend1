import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    
    email:'',
    password:'',
    password2:'',
    usertype:'Admin',

  })

  const handleRegister = async(e) => {
    e.preventDefault()
    const {email, password, password2, usertype} = data;
    try {
      const { data } = await axios.post('/register',{email, password, usertype})
      if (password !== password2) {
        toast.error("password did not match");
      } else {
        if (data.error) {
          toast.error(data.error);
        } else {
          setData({});
          toast.success("Register successful!");
          navigate("/");
        }
      }


      
    } catch (error) {
      
    }


  }



  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-2 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">Please enter your Email and password!</p>
                  <form onSubmit={(e) => handleRegister(e)}>
                  <div className="form-outline form-white mb-2">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={(e) => setData({...data, email:e.target.value }) }  placeholder='Enter your Email' />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>
                  <div className="form-outline form-white mb-2">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(e) => setData({...data, password:e.target.value }) }   placeholder='Enter your Password'/>
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                  <div className="form-outline form-white mb-2">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(e) => setData({...data, password2:e.target.value }) }  placeholder='Enter your Confrom Password' />
                    <label className="form-label" htmlFor="typePasswordX">Confirm Password</label>
                  </div>
                  {/* <div className="form-outline form-white mb-2">
                    <select name="" id="" className="form-control form-control-lg" onChange={(e) => setData({...data, usertype:e.target.value }) } >
                      <option selected disabled >select usertype</option>

                      <option >Admin</option>
                      <option>User</option>
                    </select>
                    
                    <label className="form-label" htmlFor="typePasswordX">Usertype</label>
                  </div> */}
                
                  <button className="btn btn-outline-light btn-lg " type="submit">Register</button>
                  </form>
                  <div className="d-flex justify-content-center text-center ">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Already have an account? <Link to='/login' className="text-white-50 fw-bold">Login </Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default RegisterPage