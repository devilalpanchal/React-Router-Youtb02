import { NavLink } from 'react-router-dom'
import logo from './logo copy.svg';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>

                <div>        <img src={logo} className="App-logo" alt="logo" />
</div>
                <div className='navbaritems'>

                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}
                        className="nabar-link" to="/home">Home</NavLink><br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/about">About</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/contactme">Contact me</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/">Contact us</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/user/anil"  state={{name:'deepak',age:35}} > User anil</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/user/devilal" > User Devilal</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/SearchPrams">  Seacrh params</NavLink> <br /> <br />
                    <NavLink
                        style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }}

                        className="nabar-link" to="/login">  Login</NavLink> <br /> <br />
                </div>
            </div>

        </div>
    )
}

export default Navbar