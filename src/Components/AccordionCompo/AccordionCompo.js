import React, { useState } from 'react';
import './AccordionCompo.css'
import { motion } from 'framer-motion';

const AccordionCompo = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <motion.div
        initial={{opacity:0 , y:20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:1 ,delay:index*.2}}
        viewport={{once:false}}
        >
        <div key={index} className="accordion-item bg-black text-primary_txt_color mb-2 ">
          <button
            className='py-3 text-xl font-dana-regular px-4 text-primary_txt_color bg-primary_bg_color w-full text-end'
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </button>
          <p className={`border-t-2  px-4 font-dana-regular mb-0 text-secondary_txt ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </p>
        </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AccordionCompo;
