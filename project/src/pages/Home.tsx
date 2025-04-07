


// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import { Dices, Crown, Users, DollarSign, Star, Calendar, Trophy } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Spline from '@splinetool/react-spline'; // Import Spline

// const facilities = [
//   {
//     title: 'Luxury Slots',
//     image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800',
//     description: 'Experience our state-of-the-art slot machines'
//   },
//   {
//     title: 'VIP Tables',
//     image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
//     description: 'Exclusive high-stakes gaming tables'
//   },
//   {
//     title: 'Fine Dining',
//     image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=800',
//     description: 'World-class restaurants and bars'
//   }
// ];

// const stats = [
//   { icon: Users, value: 78091, label: 'Registered Users' },
//   { icon: Crown, value: 435823, label: 'Tasks Completed' },
//   { icon: DollarSign, value: 2150.526, label: 'Payouts This Month (K)' }
// ];

// const reviews = [
//   {
//     name: "James Wilson",
//     rating: 5,
//     comment: "The best casino experience I've ever had. The VIP treatment is unmatched!",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
//   },
//   {
//     name: "Sarah Chen",
//     rating: 5,
//     comment: "Incredible atmosphere and professional dealers. Won big at the poker tables!",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
//   },
//   {
//     name: "Michael Rodriguez",
//     rating: 5,
//     comment: "The slots are amazing and the rewards program is very generous.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
//   }
// ];

// const upcomingGames = [
//   {
//     title: "Texas Hold'em Tournament",
//     date: "March 15, 2024",
//     prize: "$100,000",
//     image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Blackjack Championship",
//     date: "March 20, 2024",
//     prize: "$50,000",
//     image: "https://images.unsplash.com/photo-1509769471082-f1dc180a7a8f?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Slots Mega Jackpot",
//     date: "March 25, 2024",
//     prize: "$250,000",
//     image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// const tournaments = [
//   {
//     name: "Spring Poker Series",
//     date: "April 1-15, 2024",
//     prize: "$500,000",
//     description: "Two weeks of intense poker action with daily tournaments",
//     image: "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     name: "High Roller Weekend",
//     date: "March 30-31, 2024",
//     prize: "$1,000,000",
//     description: "Exclusive high-stakes tournament for serious players",
//     image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// const memberships = [
//   {
//     tier: 'Bronze',
//     price: 100,
//     features: ['Basic game access', '24/7 support', 'Weekly bonuses']
//   },
//   {
//     tier: 'Silver',
//     price: 150,
//     features: ['Premium game access', 'VIP support', 'Daily bonuses', 'Exclusive events']
//   },
//   {
//     tier: 'Gold',
//     price: 200,
//     features: ['All games access', 'Priority VIP support', 'Hourly bonuses', 'VIP events', 'Luxury amenities']
//   }
// ];

// const Home = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   return (
//     <div className="pt-24">
//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-violet-400 to-blue-400 bg-clip-text text-transparent poker-card-effect"
//           >
//             Welcome to LuxeCasino
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-xl text-gray-300"
//           >
//             Experience the thrill of luxury gaming
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link to="/login" className="btn-primary inline-block mt-8">
//               Start Playing Now
//             </Link>
//           </motion.div>
//           {/* Add Spline component here */}
//           <div className="mt-10 ">
//             <Spline scene="https://prod.spline.design/uEJN3Z0KDTwbiv7A/scene.splinecode" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Facilities Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Our Premium Facilities</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {facilities.map((facility, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="glass squircle p-6 card-hover poker-card-effect"
//             >
//               <img
//                 src={facility.image}
//                 alt={facility.title}
//                 className="w-full h-48 object-cover squircle mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
//               <p className="text-gray-400">{facility.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Our Achievements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: index * 0.2 }}
//               className="glass squircle p-8 text-center poker-card-effect"
//             >
//               <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-400" />
//               <div className="text-3xl font-bold mb-2">
//                 <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 3 : 0} />
//               </div>
//               <p className="text-gray-400">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Player Reviews Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Player Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="review-card"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{review.name}</h3>
//                   <div className="flex text-yellow-500">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <Star key={i} size={16} fill="currentColor" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-300">{review.comment}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Upcoming Games Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Upcoming Games</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {upcomingGames.map((game, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="game-card"
//             >
//               <img
//                 src={game.image}
//                 alt={game.title}
//                 className="w-full h-48 object-cover squircle mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
//               <div className="flex items-center text-gray-300 mb-2">
//                 <Calendar size={16} className="mr-2" />
//                 {game.date}
//               </div>
//               <div className="flex items-center text-green-400">
//                 <DollarSign size={16} className="mr-2" />
//                 Prize Pool: {game.prize}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Tournaments Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Featured Tournaments</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {tournaments.map((tournament, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="tournament-card"
//             >
//               <div className="flex flex-col md:flex-row gap-6">
//                 <img
//                   src={tournament.image}
//                   alt={tournament.name}
//                   className="w-full md:w-48 h-48 object-cover squircle"
//                 />
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-2">{tournament.name}</h3>
//                   <div className="flex items-center text-gray-300 mb-2">
//                     <Calendar size={16} className="mr-2" />
//                     {tournament.date}
//                   </div>
//                   <div className="flex items-center text-green-400 mb-2">
//                     <Trophy size={16} className="mr-2" />
//                     Prize Pool: {tournament.prize}
//                   </div>
//                   <p className="text-gray-300">{tournament.description}</p>
//                   <button className="btn-primary mt-4">Register Now</button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Membership Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h2 className="section-title">Premium Memberships</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {memberships.map((membership, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="glass squircle p-8 text-center poker-card-effect"
//             >
//               <h3 className="text-2xl font-bold mb-4">{membership.tier}</h3>
//               <div className="text-4xl font-bold mb-6">
//                 ${membership.price}
//                 <span className="text-lg text-gray-400">/month</span>
//               </div>
//               <ul className="space-y-3 mb-8">
//                 {membership.features.map((feature, i) => (
//                   <li key={i} className="text-gray-300">♦ {feature}</li>
//                 ))}
//               </ul>
//               <Link to="/login" className="btn-primary w-full inline-block">
//                 Choose Plan
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {  Crown, Users, DollarSign, Star, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline'; // Import Spline
import img1 from '../impg/encoded_image.png'
const facilities = [
  {
    title: 'Luxury Slots',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800',
    description: 'Experience our state-of-the-art slot machines'
  },
  {
    title: 'VIP Tables',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    description: 'Exclusive high-stakes gaming tables'
  },
  {
    title: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=800',
    description: 'World-class restaurants and bars'
  }
];

const stats = [
  { icon: Users, value: 78091, label: 'Registered Users' },
  { icon: Crown, value: 435823, label: 'Tasks Completed' },
  { icon: DollarSign, value: 2150.526, label: 'Payouts This Month (K)' }
];

const reviews = [
  {
    name: "James Wilson",
    rating: 5,
    comment: "The best casino experience I've ever had. The VIP treatment is unmatched!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Sarah Chen",
    rating: 5,
    comment: "Incredible atmosphere and professional dealers. Won big at the poker tables!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Michael Rodriguez",
    rating: 5,
    comment: "The slots are amazing and the rewards program is very generous.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

const upcomingGames = [
  {
    title: "Texas Hold'em Tournament",
    date: "March 15, 2024",
    prize: "$100,000",
    image: img1
  },
  {
    title: "Blackjack Championship",
    date: "March 20, 2024",
    prize: "$50,000",
    image: "https://play-lh.googleusercontent.com/r0TT2Rs_K8bz3rcdo_mBXt4hAAS3zOArwKqBiC4LijDoJFTvI6IbztTgQO55BxjigXs=w526-h296-rw"
  },
  {
    title: "Slots Mega Jackpot",
    date: "March 25, 2024",
    prize: "$250,000",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800"
  }
];

const tournaments = [
  {
    name: "Spring Poker Series",
    date: "April 1-15, 2024",
    prize: "$500,000",
    description: "Two weeks of intense poker action with daily tournaments",
    image: "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "High Roller Weekend",
    date: "March 30-31, 2024",
    prize: "$1,000,000",
    description: "Exclusive high-stakes tournament for serious players",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800"
  }
];

const memberships = [
  {
    tier: 'Bronze',
    price: 100,
    features: ['Basic game access', '24/7 support', 'Weekly bonuses']
  },
  {
    tier: 'Silver',
    price: 150,
    features: ['Premium game access', 'VIP support', 'Daily bonuses', 'Exclusive events']
  },
  {
    tier: 'Gold',
    price: 200,
    features: ['All games access', 'Priority VIP support', 'Hourly bonuses', 'VIP events', 'Luxury amenities']
  }
];

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-10">
      {/* Hero Section */}
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden">
  {/* Spline Model (Full Screen Background) */}
  <div className="absolute inset-0 w-full h-full z-0">
    <Spline 
      scene="https://prod.spline.design/uEJN3Z0KDTwbiv7A/scene.splinecode" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Main Heading (On Top of the Model) */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10 mt-20 text-center"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-violet-400 to-blue-400 bg-clip-text text-transparent poker-card-effect"
    >
      Welcome to LuxeCasino
    </motion.h1>
  </motion.div>

  {/* Paragraph and Button (Below the Model) */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="relative z-10 mt-[60vh] text-center"
  >
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xl text-gray-300 mt-10"
    >
      Experience the thrill of luxury gaming
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Link to="/login" className="btn-primary inline-block mt-8">
        Start Playing Now
      </Link>
    </motion.div>
  </motion.div>
</section>
      {/* Facilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Our Premium Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass squircle p-6 card-hover poker-card-effect"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover squircle mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-400">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="glass squircle p-8 text-center poker-card-effect"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <div className="text-3xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 3 : 0} />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Player Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Player Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="review-card"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Upcoming Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="game-card"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover squircle mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <div className="flex items-center text-gray-300 mb-2">
                <Calendar size={16} className="mr-2" />
                {game.date}
              </div>
              <div className="flex items-center text-green-400">
                <DollarSign size={16} className="mr-2" />
                Prize Pool: {game.prize}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Featured Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="tournament-card"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full md:w-48 h-48 object-cover squircle"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{tournament.name}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Calendar size={16} className="mr-2" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center text-green-400 mb-2">
                    <Trophy size={16} className="mr-2" />
                    Prize Pool: {tournament.prize}
                  </div>
                  <p className="text-gray-300">{tournament.description}</p>
                  <button className="btn-primary mt-4">Register Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="section-title">Premium Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass squircle p-8 text-center poker-card-effect"
            >
              <h3 className="text-2xl font-bold mb-4">{membership.tier}</h3>
              <div className="text-4xl font-bold mb-6">
                ${membership.price}
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {membership.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">♦ {feature}</li>
                ))}
              </ul>
              <Link to="/" className="btn-primary w-full inline-block">
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;