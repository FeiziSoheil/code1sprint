import React, { useState } from "react";
import { FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTA() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="bg-blue-600 w-16 h-16 fixed bottom-8 right-6 rounded-full flex justify-center items-center cursor-pointer z-40"
    >
      <motion.div
        className="absolute"
        initial={{ y: 0, x: 0, opacity: 0,visibility:'hidden' }}
        animate={isClicked ? { y: -68, x: 12, opacity: 1 ,visibility:'visible'} : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center bg-blue-gray-300 w-14 h-14 rounded-full">
          <a href="tel:+989142895825">
          <FaPhone size={30} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ y: 0, x: 0, opacity: 0 ,visibility:'hidden' }}
        animate={isClicked ? { y: -46 , x: -53, opacity: 1 ,visibility:'visible'} : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex justify-center items-center bg-blue-gray-300 w-14 h-14 rounded-full">
          <a href="https://t.me/soheil_feizi">
          <FaTelegram size={30} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ y: 0, x: 0, opacity: 0 ,visibility:'hidden'}}
        animate={isClicked ? { y: 20, x: -65, opacity: 1 ,visibility:'visible'} : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex justify-center items-center bg-blue-gray-300 w-14 h-14 hover:bg-blue_color duration-200 rounded-full">
          <a href="https://wa.me/+989142895825"><FaWhatsapp size={30} /></a>
          
        </div>
      </motion.div>

      <span className="text-white">+</span>
    </div>
  );
}
