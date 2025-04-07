import { motion } from 'framer-motion';
import img4 from '../impg/imgonline-com-ua-exifedit4g8HuWBTAhfN.jpg'
const images = [
  {
    url: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&q=80&w=800',
    title: 'Main Gaming Floor'
  },
  {
    url: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80&w=800',
    title: 'VIP Lounge'
  },
  {
    url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Restaurant'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    title: 'Poker Room'
  },
  {
    url: img4,
    title: 'casino bank'
  },
  {
    url: 'https://saharaigroup.com/images/bank.jpeg',
    title: 'Bank'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-gray-300">Take a virtual tour of our luxurious facilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass squircle p-4 card-hover"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover squircle mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{image.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;