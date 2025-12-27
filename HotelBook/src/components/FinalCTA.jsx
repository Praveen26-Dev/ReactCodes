import { motion } from "framer-motion";
import Footer from "./Footer";

const FinalCTA = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Your Perfect Stay <br />
            <span className="text-yellow-400">Starts Here</span>
          </h2>

          <button className="mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold">
            Book Your Stay
          </button>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default FinalCTA;
