import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const bounceSettings = {
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
  },
};

export default function Socials() {
  return (
    <div className="flex gap-5 justify-center">
      <motion.a
        href="https://www.instagram.com/evolved_men_tality/"
        target="_blank"
        rel="noopener noreferrer"
        {...bounceSettings}
      >
        <Instagram size={44} color="white" />
      </motion.a>

      <motion.a
        href="https://www.facebook.com/EvolvedMENTALITYForum/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.2 }}
      >
        <Facebook size={44} color="white" />
      </motion.a>

      <motion.a
        href="mailto:evolvedblackmen@gmail.com"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.4 }}
      >
        <Mail size={44} color="white" />
      </motion.a>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.6 }}
      >
        <Phone size={44} color="white" />
      </motion.div>
    </div>
  );
}
