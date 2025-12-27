import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Amit Sharma",
    city: "Delhi",
    text: "Amazing stay! Clean rooms and premium service. Highly recommended.",
  },
  {
    name: "Neha Verma",
    city: "Mumbai",
    text: "Loved the ambience and hospitality. The booking process was smooth.",
  },
  {
    name: "Rahul Mehta",
    city: "Bangalore",
    text: "Luxury experience with excellent customer support. Worth every penny.",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 80 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

const GuestReviews = () => {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);

  /* 🔁 Auto slide only when section is visible */
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="h-screen bg-gray-900 text-white flex items-center">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          What Our <span className="text-yellow-400">Guests Say</span>
        </motion.h2>

        {/* Review Slider */}
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed">
                “{reviews[index].text}”
              </p>

              <p className="mt-6 text-yellow-400 font-semibold text-lg">
                {reviews[index].name},{" "}
                <span className="text-gray-400">{reviews[index].city}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-yellow-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GuestReviews;
