import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 bg-gray-800">
        <nav className="flex justify-center space-x-6">
          <a href="#about" className="text-gray-400 hover:text-white">About</a>
          <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="mb-8 text-5xl font-bold text-center text-blue-400">Welcome to My Portfolio</h1>
        <p className="mb-6 text-2xl text-gray-300">
          Hi, I'm Sambhav Soni, a passionate developer.
        </p>
        <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
          Explore
        </button>
      </main>
      <footer className="px-6 py-4 bg-gray-800">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

