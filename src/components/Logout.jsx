import React from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from '../context/userContext'


const Logout = () => {
    const navigate = useNavigate()
    const {  setUser } = useContext(UserContext)

    const logoutUser = async() => {
        try {
          await axios.post('/logout')
          setUser(null)
          navigate('/')
        } catch (error) {
          console.log(error)
        }
    
      }
  return (
    <Link className=' text-decoration-none text-black fw-bolder' onClick={logoutUser}>Logout</Link>
  )
}

export default Logout