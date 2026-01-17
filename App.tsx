import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Library } from './pages/Library';
import { Simulator } from './pages/Simulator';
import { Education } from './pages/Education';
import { Legal } from './pages/Legal';

// Wrapper to conditionally render the main footer
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLibrary = location.pathname === '/';

  return (
    <>
      <Navbar />
      {children}
      {isLibrary && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/simulator/:id" element={<Simulator />} />
          <Route path="/education/:id" element={<Education />} />
          <Route path="/legal" element={<Legal />} />
          {/* Fallback */}
          <Route path="*" element={<Library />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}