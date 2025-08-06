import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DiseasePrediction from './pages/DiseasePrediction';
import InsuranceCalculator from './pages/InsuranceCalculator';
import HealthBlog from './pages/HealthBlog';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/disease-prediction" element={<DiseasePrediction />} />
            <Route path="/insurance-calculator" element={<InsuranceCalculator />} />
            <Route path="/health-blog" element={<HealthBlog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;