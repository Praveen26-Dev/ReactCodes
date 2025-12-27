import { motion } from "framer-motion";

const rooms = [
  {
    name: "Deluxe Suite",
    price: "₹6,500 / night",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
  },
  {
    name: "Luxury Room",
    price: "₹4,800 / night",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600",
  },
  {
    name: "Presidential Suite",
    price: "₹12,000 / night",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600",
  },
];

/* Parent container animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

/* Card animation */
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FeaturedRooms = () => {
  return (
    <section className="h-screen bg-gray-100 flex items-center">
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35 }}   // 👈 runs every time
      >
        {/* Title */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          Featured <span className="text-yellow-500">Rooms</span>
        </motion.h2>

        {/* Room Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Image */}
              <motion.div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${room.img})` }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-gray-600 mt-2">{room.price}</p>

                <button className="mt-4 bg-yellow-400 px-6 py-2 rounded-lg font-semibold">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedRooms;
