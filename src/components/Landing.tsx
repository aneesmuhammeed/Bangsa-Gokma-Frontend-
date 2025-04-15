import React from 'react';

const Landing = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transforming ideas into digital reality
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
    </section>
  );
};

export default Landing;