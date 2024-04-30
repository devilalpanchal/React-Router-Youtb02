import './App.css';
import { BrowserRouter as BR, Routes, Route,Navigate } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import { Link } from 'react-router-dom';
import Page404 from './Component/Page404';
import User from './Component/User';
function App() {
  return (
    <div className="App">
      <h1>React Router Successful</h1>
      <BR>
        <Link to="/home">Home</Link><br /> <br />
        <Link to="/about">About</Link> <br /> <br />
        <Link to="/Contact">Contact us</Link> <br /> <br />
        <Link to="/user/anil"> User anil</Link> <br /> <br />
        <Link to="/user/devilal"> User Devilal</Link> <br /> <br />

        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/user/:name' element={<User />} />
          <Route path='/' element={<Navigate to="/Page404"/>} />
          {/* <Route path='/' element={<Page404/>} /> */}
        </Routes>
      </BR>
    </div>
  );
}

export default App;
