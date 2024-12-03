import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ExpWork.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 821);

  // انیمیشن‌های متفاوت برای موبایل و دسکتاپ
  const firstRowAnimation = useSpring({
    transform: isMobile 
      ? `translateY(${Math.min(scrollY * 0.05, 100)}px)`
      : `translateX(${Math.min(scrollY * 0.1, window.innerWidth * 0.8)}px)`,
    config: { tension: 100, friction: 50 },
  });

  const secondRowAnimation = useSpring({
    transform: isMobile
      ? `translateY(${-Math.min(scrollY * 0.03, 80)}px)`
      : `translateX(${-scrollY * 0.1}px)`,
    config: { tension: 300, friction: 30 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 821);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageData = [
    { src: "./image/Project1.png", title: '' },
    { src: "./image/project2.png", title: 'هتل گووَن' },
    { src: "./image/img.jpeg", title: '' }, 
  ];

  return (
    <div className="px-3 py-6 md:p-5 overflow-hidden relative">
      <div className="over"></div>
      
      {/* Main Container */}
      <div className="container mx-auto ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-5 mb-8 lg:mb-0">
          {/* Project Showcase */}
          <animated.div
            style={{
              ...firstRowAnimation,
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
            className="w-full lg:w-1/2 lg:-translate-x-12"
          >
            <div className="w-full p-3 md:p-4 bg-card_bg_color rounded-2xl transition-transform hover:scale-105">
              <div className="w-full overflow-hidden rounded-lg aspect-video">
                <img 
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
                  src='/image/project1.png' 
                  alt="پروژه پرک" 
                />
              </div>
              <div className="px-2 md:px-3 py-2 mt-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-dana-regular text-primary_txt_color">
                  سایت فیلم و سریال پرک
                </h2>
                <p className="font-dana-regular text-sm md:text-base text-secondary_txt opacity-8 mb-0">
                  ریکت ، جاوااسکریپت
                </p>
              </div>
            </div>
          </animated.div>

          {/* Title Section */}
          <div className="w-full my-24  lg:w-1/2 relative space-y-4 lg:space-y-5 text-center lg:text-right">
            <h2 className="text-
             font-dana-demibold text-2xl md:text-3xl lg:text-5xl text-blue_color">
              نمونه کارهای شرکت کد وان اسپرینت
            </h2>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                "دیزاین خلاقانه",
                "دیزاین حرفه‌ای",
                "طرح‌های متنوع",
                "سئوی قوی",
                "کدنویسی اختصاصی",
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base hover:bg-[#ffffff] duration-300 cursor-pointer 
                           hover:text-primary_bg_color py-1.5 md:py-2 px-3 md:px-4 border 
                           rounded-md text-secondary_txt font-dana-regular"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="relative h-12 mt-6">
              <span className="border inline-flex items-center justify-center absolute 
                         left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-1/4
                         rounded-full p-3 md:px-5 hover:bg-[#ffffff20] transition-colors">
                <Link to="expWorks">
                  <lord-icon
                    src="https://cdn.lordicon.com/whtfgdfm.json"
                    trigger="loop"
                    delay="2000"
                    state="hover-ternd-flat-6"
                    colors="primary:#ffffff"
                    style={{ transform: "rotate(180deg)" }}
                  ></lord-icon>
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <animated.div 
          className="mt-8 lg:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5"
          style={secondRowAnimation}
        >
          {imageData.map((item, index) => (
            <div 
              key={index}  
              className="p-3 md:p-4 bg-card_bg_color rounded-2xl transition-transform hover:scale-105
                       transform-gpu backface-hidden"
            >
              <div className="w-full overflow-hidden rounded-lg aspect-video">
                <img 
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
                  src={item.src} 
                  alt={item.title || 'project image'} 
                  loading="lazy"
                />
              </div>
              <div className="px-2 md:px-3 py-2 mt-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-dana-regular text-primary_txt_color">
                  {item.title || 'پروژه کدآنلاین'}
                </h2>
                <p className="text-sm md:text-base font-dana-regular text-secondary_txt opacity-8">
                  ریکت ، جاوااسکریپت
                </p>
              </div>
            </div>
          ))}
        </animated.div>
        
      </div>
    </div>
  );
};

export default Slider;