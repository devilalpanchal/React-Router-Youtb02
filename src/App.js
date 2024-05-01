import './App.css';
import logo from './logo.svg';

import { BrowserRouter as BR, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import { Link } from 'react-router-dom';
import Page404 from './Component/Page404';
import User from './Component/User';
import SearchPrams from './Component/SearchPrams';
import Contactme from './Component/Contactme';
import Campany from './Component/Campany';
import Channel from './Component/Channel';
import Others from './Component/Others';
function App() {
  return (
    <div className="App">
      <h1>React Router Successful</h1>
      <BR>
        {/* <Link to="/home">Home</Link><br /> <br />
        <Link to="/about">About</Link> <br /> <br />
        <Link to="/Contact">Contact us</Link> <br /> <br />
        <Link to="/user/anil"> User anil</Link> <br /> <br />
        <Link to="/user/devilal"> User Devilal</Link> <br /> <br /> */}
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/user/:name' element={<User />} />
          <Route path='/SearchPrams' element={<SearchPrams />} />
          <Route path='/' element={<Navigate to="/Page404" />} />
          <Route path='/page404' element={<Page404 />} />

          {/* nested Routes */}

          <Route path='/contactme' element={<Contactme />}>
            <Route path='campany' element={<Campany />} />
            <Route path='channel' element={<Channel />} />
            <Route path='others' element={<Others />} />
          </Route>
        </Routes>
      </BR>
    </div>
  );
}
export default App;
