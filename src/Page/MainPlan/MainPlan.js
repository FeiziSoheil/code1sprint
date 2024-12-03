import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import planInfo from "../../Data";
import "./MainPlan.css";
import FutureCard from "../../Components/FutureCard/FutureCard";
import CustomerComment from "../../Components/CustomerComment/CustomerComment";
import AccordionCompo from "../../Components/AccordionCompo/AccordionCompo";

export default function MainPlan() {
  const { planID } = useParams();
  const [plans, setPlans] = useState(planInfo);
  const [mainPlanInfo, setMainPlanInfo] = useState();

  console.log(mainPlanInfo);

  useEffect(() => {
    let filteredPlan = plans.find((plan) => plan.id === Number(planID));
    setMainPlanInfo(filteredPlan);
  }, [planID, plans]);

  return (
    <>
      <motion.div
        className="py-12 md:py-24 bg-primary_bg_color flex relative -z-0 min-h-screen px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Left Section */}
            <motion.div
              className="w-full flex flex-col md:flex-row"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Vertical Line - Hidden on mobile */}
              <div className="hidden md:block line w-1 md:w-2 h-[300px] md:h-[500px] bg-blue_color md:ml-10 self-center"></div>

              {/* Content Section */}
              <div className="w-full relative mt-4 md:mt-0">
                {mainPlanInfo ? (
                  <motion.h1
                    className="font-dana-bold text-2xl md:text-4xl text-primary_txt_color"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {mainPlanInfo.title}
                  </motion.h1>
                ) : (
                  <p className="text-center">در حال بارگذاری...</p>
                )}

                <motion.h2
                  className="text-blue_color font-dana-regular text-xl md:text-2xl my-2 md:my-3"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="text-secondary_txt">شروع</span> کسب و کار
                  نوین
                </motion.h2>

                <motion.p
                  className="text-dana-regular text-blue_color mt-4 md:mt-8"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  توضیحات
                </motion.p>

                <div className="lin2 w-full md:w-2/3 h-1 md:h-2 my-3 md:my-5"></div>

                <div className="relative">
                  {mainPlanInfo ? (
                    <motion.p
                      className="h-60 md:h-80 overflow-y-scroll plan-about font-dana-regular text-secondary_txt text-base md:text-lg px-2 md:px-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      {mainPlanInfo.des}
                    </motion.p>
                  ) : (
                    <p>در حال بارگذاری</p>
                  )}
                  <span className="plan-about-overlay absolute bottom-0 w-full h-16 md:h-20 z-auto"></span>
                </div>

                {/* Contact Buttons */}
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-between w-full relative mt-6 md:mt-0 gap-4 md:gap-0 md:pl-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <p className="text-blue_color font-dana-regular border border-blue_color py-2 md:py-3 px-3 md:px-4 rounded-md hover:bg-blue_color hover:text-primary_bg_color cursor-pointer transition-all duration-300 text-sm md:text-base">
                    ثبت سفارش از طریق »
                  </p>
                  <div className="flex items-center gap-3 md:gap-5">
                    <a href="https://t.me/soheil_feizi">
                      <FaTelegram
                        size={30}
                        className="text-[#ffffff38] hover:text-[#ffffff60] cursor-pointer transition-colors duration-300"
                      />
                    </a>

                    <a href="">
                      <IoLogoWhatsapp
                        size={30}
                        className="text-[#ffffff38] hover:text-[#ffffff60] cursor-pointer transition-colors duration-300"
                      />
                    </a>

                    <a href="tel:+989142895825">
                      <FaPhoneAlt
                        size={30}
                        className="text-[#ffffff38] hover:text-[#ffffff60] cursor-pointer transition-colors duration-300"
                      />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section - Grid Items */}
            <motion.div
              className="w-full flex relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="grid-container grid w-full gap-3 md:gap-5 py-5 md:py-10">
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    className={`grid-item grid-item${
                      index + 1
                    } min-h-[100px] md:min-h-[150px]`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  ></motion.div>
                ))}
              </div>
              <div className="line3 absolute w-full h-1 md:h-2 bottom-0 -left-4 md:-left-16"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className=" py-5 px-4 plan-future-wrapper">
        <h2 className="font-dana-bold text-center text-secondary_txt">
          برخی امکاناتی که در سایت فروشگاهی اراِئه میدیم...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-16">
          <FutureCard mainPlan={mainPlanInfo ? mainPlanInfo : null} />
        </div>
      </div>
      <CustomerComment />
      <div className="faq-wrapper py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl  leading-tight text-center font-dana-bold text-primary_txt_color sm:text-4xl lg:text-5xl">
            پرسش های متداول
          </h2>
          <div className="mt-16">
            <AccordionCompo
              items={mainPlanInfo && mainPlanInfo.faq ? mainPlanInfo.faq : []}
            />
          </div>
        </div>
      </div>
    </>
  );
}
