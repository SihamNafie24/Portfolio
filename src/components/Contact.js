import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://formsubmit.co/nafiesiham36@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2544] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-2 flex items-center gap-4">
            Contact
            <span className="block w-24 h-1 bg-cyan-400 rounded ml-2"></span>
          </h2>
          <p className="text-xl text-gray-300">Get in touch with me</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700/50"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-8 max-w-md">
                I'm currently available for freelance work or full-time positions. If you have a project that you want to get started, think you need my help with something, or just want to say hello, then get in touch.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-cyan-400 text-2xl" />
                  </span>
                  <div>
                    <span className="block text-white font-semibold">Email</span>
                    <a href="mailto:nafiesiham36@gmail.com" className="text-cyan-300 hover:underline">
                      nafiesiham36@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                    <FaPhone className="text-cyan-400 text-2xl" />
                  </span>
                  <div>
                    <span className="block text-white font-semibold">Phone</span>
                    <a href="tel:+212643552164" className="text-cyan-300 hover:underline">
                      +212 643552164
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-cyan-900/60 p-3 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  </span>
                  <div>
                    <span className="block text-white font-semibold">Location</span>
                    <span className="text-cyan-300">Casablanca, Morocco</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/SihamNafie24"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:text-cyan-400 text-2xl transition-colors duration-200"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/siham-nafie"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-white hover:text-cyan-400 text-2xl transition-colors duration-200"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700/50 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#112240] text-white placeholder-gray-400 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-700"
            ></textarea>
            
            {status.error && (
              <div className="text-red-400 text-sm">{status.error}</div>
            )}
            
            {status.submitted && (
              <div className="text-green-400 text-sm">Message sent successfully!</div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-lg font-bold py-4 rounded-lg shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 ${
                status.submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 