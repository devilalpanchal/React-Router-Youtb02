// import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <h1>
                Page404   Please Not Found
            </h1>
            <p>
                Error
                src\index.js
                Line 6:8:  'Home' is defined but never used   no-unused-vars
                Line 7:8:  'About' is defined but never used  no-unused-vars
            </p>
            <Link to="/home">Home </Link>
        </div>
    )
}

export default Page404