import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

import Signuppage from './pages/Signup';








function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signuppage/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

     
    </div>
  );
}

export default App;
