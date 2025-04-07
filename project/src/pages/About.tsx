import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass squircle p-8 mb-8"
        >
          <h1 className="text-4xl font-bold mb-6">About LuxeCasino</h1>
          <p className="text-gray-300 mb-4">
            Welcome to LuxeCasino, where luxury meets entertainment. Since our establishment,
            we have been dedicated to providing an unparalleled gaming experience in a
            sophisticated and secure environment.
          </p>
          <p className="text-gray-300">
            Our state-of-the-art facility features the latest in gaming technology,
            complemented by exceptional service and world-class amenities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass squircle p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To create an extraordinary gaming destination that exceeds expectations,
              delivering memorable experiences through exceptional service, cutting-edge
              technology, and unwavering commitment to responsible gaming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass squircle p-8"
          >
            <h2 className="text-2xl font-bold mb-4">cipher-text</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• szxp</li>
              <li>• Fanzxtyr keqiw cfopq</li>
              <li>• event Date: 11-04-2025</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass squircle p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-gray-300">
            At LuxeCasino, we are committed to responsible gaming and maintaining the
            highest standards of security and fairness. Our dedicated team works
            tirelessly to ensure every visit exceeds your expectations while promoting
            safe and responsible entertainment.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;