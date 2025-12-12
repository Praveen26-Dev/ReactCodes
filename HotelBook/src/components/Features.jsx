import React from "react";
import { FaWifi, FaSwimmer, FaConciergeBell } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const Features = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg"
      >
        Why Choose Us?
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-16 max-w-7xl mx-auto">

        {[ 
          { icon: <FaWifi size={55} />, title: "Free Wi-Fi", text: "Unlimited high-speed internet access" },
          { icon: <FaSwimmer size={55} />, title: "Swimming Pool", text: "Enjoy our premium outdoor pools" },
          { icon: <FaConciergeBell size={55} />, title: "Room Service", text: "24/7 room service available" }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -10 }}
            className="p-10 bg-white shadow-xl rounded-3xl border border-yellow-400/20 hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="text-yellow-500 mb-5 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            <p className="mt-3 text-gray-600 text-lg">{item.text}</p>
          </motion.div>
        ))}

      </div>

      {/* Background Shine */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "140%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        className="absolute top-0 left-0 w-[180px] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
};

export default Features;
