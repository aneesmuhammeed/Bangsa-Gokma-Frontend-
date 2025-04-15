import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Us</h2>
          <p className="text-lg text-gray-300 mb-12">
            We are a passionate team dedicated to delivering exceptional digital solutions. 
            With years of experience in the industry, we combine creativity and technical expertise 
            to bring your vision to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Pushing boundaries with cutting-edge technology and creative solutions.
              </p>
            </div>
            <div className="p-6 bg-neutral-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quality</h3>
              <p className="text-gray-300">
                Delivering excellence through attention to detail and best practices.
              </p>
            </div>
            <div className="p-6 bg-neutral-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
              <p className="text-gray-300">
                Focused on achieving measurable outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;