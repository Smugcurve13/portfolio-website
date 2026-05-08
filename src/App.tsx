import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  const location = useLocation();

  // Scroll to a section when navigating back from a detail page
  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTarget) {
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, '', '/');
    } else if (location.hash) {
      const id = location.hash.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state, location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  // Show the loading screen only on the first home-page visit within a session
  const [isLoading, setIsLoading] = useState(() => {
    if (location.pathname !== '/') return false;
    return !sessionStorage.getItem('portfolioLoaded');
  });

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('portfolioLoaded', '1');
    }, 2500);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
