import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return JSON.parse(localStorage.getItem('user')) ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" />
  )
}

export default PrivateRoute
