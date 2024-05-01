import { Link, NavLink } from 'react-router-dom'
// import logo from './logo192'
const Navbar = () => {
    return (
        <div>
            <div className='navbar'>

                <div><h1>LOGO</h1></div>
                <div className='navbaritems'>

                    {/* isActive in Navbar */}
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}
                        className="nabar-link" to="/home">Home</NavLink><br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/about">About</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/">Contact us</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/user/anil"> User anil</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/user/devilal"> User Devilal</NavLink> <br /> <br /></div>
            </div>

        </div>
    )
}

export default Navbar