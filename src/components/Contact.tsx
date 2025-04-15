import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">Stay updated with our latest news and updates</p>
          </div>

          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <p className="text-gray-400">
                  Skayil Gokma<br />
                  Sumoor Nubra<br />
                  Leh Ladakh, 194401<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-400">
                  Have questions? We're here to help!<br />
                  Email us at: info@bangsagokma.com<br />
                  Phone: +91 123 456 7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;