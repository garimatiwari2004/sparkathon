import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import QRScanner from './pages/qrscanner';
import Footer from './components/footer';
import HowItWorks from './components/working';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h2>Recircle</h2>} /> */}
        <Route path="/" element={<><Hero /> <HowItWorks/> </>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>} />
        <Route path="/scanner" element={
          <PrivateRoute>
          <QRScanner />
          </PrivateRoute>} /> 
        <Route path="/working" element={<HowItWorks />} /> 
      </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
