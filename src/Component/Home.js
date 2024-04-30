import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='App'>
            <h2>Home</h2>
            <p>The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.
            </p>
            <Link to="/about"> Go to About Page</Link>
        </div>
    )
}

export default Home