import React, { Component, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProctedRoutes = (props) => {
    const {Component}  = props
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    });
  return (
    <div>

<Component/>

    </div>
  )
}

export default ProctedRoutes