import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./FutureCard.css";

export default function FutureCard({ mainPlan }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!mainPlan || !mainPlan.moreFuture) {
    // اگر داده‌ها آماده نیستند، یک نمایشگر بارگذاری یا محتوای پیش‌فرض را بازگردانید
    return <p className="text-center">در حال بارگذاری...</p>;
  }

  return (
    <>
      {mainPlan.moreFuture.map((future, index) => (
        <motion.div
          key={index}
          className="future-card py-5 px-3 gap-2 text-secondary_txt flex flex-col border items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.6,
            duration: 0.6,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(5px)" : "none",
            pointerEvents: hoveredIndex !== null && hoveredIndex !== index ? "none" : "auto",
            transition: "filter 0.4s ease-in-out",
          }}
        >
          <div className="bg-gray-60000 p-3 furure-card-icon rounded-full">
            <future.icon size={35} className="text-blue_color" />
          </div>

          <p className="font-dana-regular tex-lg mb-0">
            {future ? future.title : "درحال بارگذاری"}
          </p>
          <p className="opacity-75 font-dana-regular mb-0 text-center">
            {future.content}
          </p>
        </motion.div>
      ))}
    </>
  );
}
