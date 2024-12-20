import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js'

function App() {
  return (
    <Router>
   
       
        <Routes>
            <Route path="/" element={<Home />} />
           
        </Routes>
    
</Router>
  );
}

export default App;