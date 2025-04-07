import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Register from './pages/Register';  
import UserProfile from './pages/user';
function App() {
  useEffect(() => {
    // Create poker decorations
    const createDecorations = () => {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.inset = '0';
      container.style.zIndex = '-1';
      container.style.overflow = 'hidden';
      document.body.appendChild(container);

      // Create poker cards
      for (let i = 0; i < 12; i++) {
        const decoration = document.createElement('div');
        decoration.className = 'poker-decoration';
        decoration.style.left = `${Math.random() * 100}%`;
        decoration.style.top = `${Math.random() * 100}%`;
        decoration.style.animation = `${['float-delay-1', 'float-delay-2', 'float-delay-3'][i % 3]} ${6 + i % 3}s ease-in-out infinite`;
        container.appendChild(decoration);
      }

      // Create coins
      for (let i = 0; i < 8; i++) {
        const coin = document.createElement('div');
        coin.className = 'poker-coin';
        coin.textContent = '🪙';
        coin.style.left = `${Math.random() * 100}%`;
        coin.style.top = `${Math.random() * 100}%`;
        coin.style.animation = `${['float-delay-1', 'float-delay-2', 'float-delay-3'][i % 3]} ${7 + i % 4}s ease-in-out infinite`;
        container.appendChild(coin);
      }
    };

    createDecorations();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a1f] text-white font-poppins">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <div className="relative">
          {/* Background gradients */}
          <div className="fixed inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-transparent pointer-events-none" />
          <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed top-1/2 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          
          {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lux" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;