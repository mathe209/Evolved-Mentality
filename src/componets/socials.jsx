import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

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
        className=' text-white hover:text-pink-400 transition'
      >
        <Instagram size={44} />
      </motion.a>

      <motion.a
        href="https://www.facebook.com/evolved.mentality/"
        target="_blank"
        rel="noopener noreferrer"
        className=' text-white hover:text-blue-400 transition'
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.2 }
      }
      >
        <Facebook size={44} />
      </motion.a>

      <motion.a
        href="mailto:evolvedblackmen@gmail.com"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.4 }}
        className=' text-white hover:text-red-800 transition'
      >
        <Mail size={44} />
      </motion.a>

      <motion.div
        href="tel:0694568316"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.6 }}
        className=' text-white hover:text-gray-400 transition'
      >
        <Phone size={44} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ ...bounceSettings.transition, delay: 0.65 }}
      >
        <a
          href="https://chat.whatsapp.com/HwMmEB6tXDJFa3Im3hJ7f7?fbclid=PAY2xjawKZqudleHRuA2FlbQIxMQABp9YRj-7yZk_f4alwFQacjVPgZe7XpSjxcWQP9XCF1gk8Ymt-P3pJLFxT3roa_aem_ktLaWw2QiUBdCqFLKXAD7w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white size-11 hover:text-green-400 transition" />
        </a>  
      </motion.div>
    </div>
  );
}
