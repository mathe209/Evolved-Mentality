import './App.css';
import Home from './pages/Home';
import About from './pages/about';
import MENtorship from './pages/MENtorship';
import Event from './pages/event';
import Join from './pages/join';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Wrap routing logic in a separate component so you can use `useLocation`
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentorship" element={<MENtorship />} />
        <Route path="/event" element={<Event />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router basename="/Evolved-Mentality/">
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
