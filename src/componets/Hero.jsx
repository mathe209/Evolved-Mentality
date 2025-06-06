import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate(); // ✅ define navigate before using it

  return (
    <section className="container m-3 p-3 rounded-xl hero bg-gradient-to-r from-black to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold mb-4">Evolved MENtality</h1>
        <hr />
        <p className="text-xl mb-6 mt-4">Unleash your mind. Build your potential.</p>
        <p className="mb-6">
          Healthy Masculinity Advocacy | Holistic Wellness | Personal Evolution | MENtorship
        </p>
        <button
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
          onClick={() => navigate('/join')}
        >
          Join Us
        </button>
        <div></div>
      </motion.div>
    </section>
  );
}
