import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './assets/css/global/index.css'
import Home from './pages/home.jsx'
import Layout from './layout/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     <Layout>
      <Routes>
       <Route path="/" element={<Home />}/>
      </Routes>
     </Layout>
    </Router>
  </StrictMode>
)
