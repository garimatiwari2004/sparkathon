import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResultPage from './pages/result';

import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './components/Dashboard';
import QRScanner from './pages/qrscanner';
import Footer from './components/footer';
import HowItWorks from './components/working';
import ReturnableItems from './components/returnableitems';
import FAQSection from './components/faq';
import ContactSection from './components/contact';
import AboutUsSection from './components/aboutsection';
import Pickup from './pages/pickup';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h2>Recircle</h2>} /> */}
        <Route path="/" element={<><Hero /> <AboutUsSection/> <HowItWorks/> <ReturnableItems/> <FAQSection/> <ContactSection/>  </>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/scanner" element={ <QRScanner /> }/>
        <Route path="/result" element={<ResultPage />} />
        <Route path="/working" element={<HowItWorks />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/pickup" element={<Pickup />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
