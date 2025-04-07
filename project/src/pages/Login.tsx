import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });

      if (res.status === 200) {
        alert('Login successful!');
        navigate('/lux'); // 👈 redirect to home
      } else {
        alert('Login failed!');
      }
    } catch (err) {
      alert('Invalid credentials!');
    }
  };


  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass squircle p-8 w-full max-w-md relative overflow-hidden"
      >
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full glass py-2 px-10 squircle focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full glass py-2 px-10 squircle focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-violet-400 hover:text-violet-300">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;