import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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

export default App
