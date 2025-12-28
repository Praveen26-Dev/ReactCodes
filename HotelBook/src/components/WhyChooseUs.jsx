import { motion } from "framer-motion";
import {
  FaWifi,
  FaSwimmer,
  FaConciergeBell,
  FaStar,
} from "react-icons/fa";
import Particles from "./Particles";

const features = [
  {
    icon: <FaStar />,
    title: "Top Rated Stays",
    desc: "Trusted by thousands of verified guests worldwide",
  },
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    desc: "Seamless internet access in every premium room",
  },
  {
    icon: <FaSwimmer />,
    title: "Luxury Amenities",
    desc: "Pools, spas and wellness facilities included",
  },
  {
    icon: <FaConciergeBell />,
    title: "24/7 Service",
    desc: "Dedicated support throughout your stay",
  },
];

/* Parent stagger */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

/* Child animation */
const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden flex items-center">
      
      {/* 🔥 PARTICLES FULL SECTION */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Ambient Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-transparent via-yellow-500/5 to-transparent z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35 }}
      >
        {/* LEFT */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Why Guests <br />
            <span className="text-yellow-400">Choose HotelEase</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            We collaborate with premium hotels to deliver comfort,
            elegance, and unforgettable experiences worldwide.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white/5 backdrop-blur-lg
                         border border-white/10
                         rounded-2xl p-6
                         hover:bg-white/10 cursor-pointer"
            >
              <div className="text-yellow-400 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
