import React from "react";
import "./Plan.css";
import PlanCard from "../PlanCard/PlanCard";
import planInfo from "../../Data";

import { motion } from "framer-motion";

export default function Plan() {
  return (
    <section className="w-full plan-wrapper h-max bg-primary_bg_color py-24" id="plan-section">
      <div className="container mx-auto">
        <motion.div>
        <h2  className="text-3xl text-center  leading-tight font-dana-bold text-primary_txt_color sm:text-4xl lg:text-5xl">
          خدمات و سرویس هایی که ما را ارائه میدیم
        </h2>
        </motion.div>
        <div className="flex justify-center flex-wrap gap-10 pt-20  overflow-hidden">
        {planInfo.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{
            opacity: 0, 
            x: index === 0 ? 60 : index === 1 ? 0 : -60,
            y: index === 1 ? -100 : 0, 
          }}
          whileInView={{
            opacity: 1, 
            x: 0, 
            y: 0, 
          }}
          transition={{
            duration: 2, 
          }}
        >
          <PlanCard
            planID={plan.id}
            title={plan.title}
            price={plan.price}
            des={plan.des}
            futures={plan.future}
          />
        </motion.div>
      ))}
        </div>
      </div>
    </section>
  );
}
