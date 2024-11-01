import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotPageFound';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import HomePage from "./pages/HomePage";
import PreLoader from './pages/PreLoader';
import LoginPage from './pages/LoginPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Function to be passed to PreLoader to control loading state
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <PreLoader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;