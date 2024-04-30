import { Link } from 'react-router-dom'
import Home from './Home'
const About = () => {
    return (
        <div className='App'>
            <h2>About</h2>
            <p>loream10
                The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.
            </p>
            <Link to="/home"> Go to Home Page</Link>

        </div>
    )
}

export default About