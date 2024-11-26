import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Companies from './pages/Companies';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

const App = () => {
  useTheme(); // Initialize theme

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hur-fungerar-det" element={<HowItWorks />} />
            <Route path="/anslut-foretag" element={<Companies />} />
            <Route path="/artiklar" element={<Articles />} />
            <Route path="/artiklar/:id" element={<ArticleDetail />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;