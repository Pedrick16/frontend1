import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {Toaster} from 'react-hot-toast'
import axios from 'axios';
import Dashboard from './pages/dashboard/Dashboard'
import { UserContextProvider } from './context/userContext'
import Index from './pages/Index'
import ViewProduct from './pages/ViewProduct'






axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials =true
const App = () => {
  return (
    <UserContextProvider>
     <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/view-item/:id' element={<ViewProduct />} />
     
    </Routes>
    
    </UserContextProvider>
  )
}

export default App