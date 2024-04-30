import './App.css';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <h1>React Router Successful</h1>
      <BR>
      <Routes>
        <Route path='/home' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
      </Routes>
      </BR>
    </div>
  );
}

export default App;
