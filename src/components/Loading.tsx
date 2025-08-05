import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Name Animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
            Sambhav<span className="text-blue-400">Soni</span>
          </h1>
          <p className="text-gray-400 text-lg animate-pulse">Loading Portfolio...</p>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-400 rounded-full animate-spin animate-reverse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-600/5 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Loading;
