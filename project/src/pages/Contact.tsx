import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Message sent!');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300">Get in touch with our team for any inquiries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass squircle p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-violet-400" size={24} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300">1234 Casino Boulevard, Las Vegas, NV 89109</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-violet-400" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-violet-400" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">info@luxecasino.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-violet-400" size={24} />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-300">Open 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass squircle p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full glass py-2 px-4 squircle focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full glass py-2 px-4 squircle focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Your email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full glass py-2 px-4 squircle focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[120px]"
                  placeholder="Your message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
