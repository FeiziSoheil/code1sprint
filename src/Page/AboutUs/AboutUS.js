import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import Circle from "../../Components/Circle/Circle";
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="py-12 md:py-24 bg-primary_bg_color relative -z-0">
      <div className="container mx-auto px-4 space-y-8 md:space-y-12">
        <Circle />
        
        {/* About Section */}
        <Fade>
          <div className="wrapper p-4 md:p-8 lg:p-11 rounded-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Slide direction="left" className="w-full lg:w-2/3">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="font-dana-bold text-blue_color text-3xl md:text-4xl">
                    درباره ما
                  </h2>
                  <p className="text-gray-700 leading-7 md:leading-8 font-dana-regular text-secondary_txt text-base md:text-lg">
                    ما در <span className="font-bold text-blue-600">کدآنلاین</span>{" "}
                    با هدف ایجاد تجربه‌ای متفاوت در حوزه طراحی و توسعه وب، فعالیت خود
                    را آغاز کردیم. تیم ما متشکل از متخصصان خلاق و حرفه‌ای است که با
                    بهره‌گیری از تکنولوژی‌های روز دنیا، بهترین خدمات را در زمینه طراحی
                    وب‌سایت، توسعه اپلیکیشن و راه‌حل‌های دیجیتال ارائه می‌دهند.
                  </p>
                  <p className="text-gray-700 leading-7 md:leading-8 font-dana-regular text-secondary_txt text-base md:text-lg">
                    ماموریت ما کمک به کسب‌وکارها برای موفقیت در دنیای دیجیتال است. با ما
                    همراه شوید تا راه‌حل‌هایی خلاقانه و متناسب با نیازهای خود دریافت
                    کنید.
                  </p>
                  <button className="bg-blue_color font-dana-regular py-2.5 px-6 rounded-md transition-all duration-300 hover:scale-105 text-base md:text-lg shadow-md hover:shadow-lg">
                    ثبت سفارش
                  </button>
                </div>
              </Slide>
              
              <Zoom className="w-full"> 
                <div className="aspect-video md:aspect-square lg:aspect-auto overflow-hidden rounded-lg shadow-xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="/image/img.jpeg"
                    alt="درباره کدآنلاین"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </Fade>

        {/* Contact Section */}
        <div className="px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Contact Info */}
            <Zoom>
              <div className="wrapper bg-card_bg_color rounded-xl p-4 md:p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  
                  {/* Email Section */}
                  <div className="bg-card_bg_color px-3 py-4 md:py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-dana-regular text-lg md:text-2xl text-primary_txt_color text-center mb-4">
                      ایمیل
                    </h3>

                    <div className="rounded-md w-full bg-[#82828262] mt-2">
                      <a
                        href="mailto:soheil.feizi@hotmail.com?subject=Contact Us"
                        className="flex items-center gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-[#6c6c6c] active:scale-95 font-dana-regular no-underline group"
                      >
                        <RiMailFill className="text-secondary_txt group-hover:text-blue_color transition-colors" size={20} />
                        <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                          ارسال ایمیل
                        </p>
                      </a>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="bg-card_bg_color px-3 py-4 md:py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="font-dana-regular text-lg md:text-2xl text-primary_txt_color text-center mb-4">
                      شبکه‌های اجتماعی
                    </h3>

                    <div className="space-y-3">
                      <div className="rounded-md w-full bg-[#82828262]">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-[#6c6c6c] active:scale-95 group"
                        >
                          <AiFillInstagram
                            className="text-secondary_txt group-hover:text-blue_color transition-colors"
                            size={20}
                          />
                          <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                            اینستاگرام
                          </p>
                        </a>
                      </div>

                      <div className="rounded-md w-full bg-[#82828262]">
                        <a
                          href="https://t.me/soheil_feizi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center font-dana-regular no-underline gap-x-3 py-2.5 px-4 justify-start transition-all duration-300 hover:bg-[#6c6c6c] active:scale-95 group"
                        >
                          <FaTelegram 
                            className="text-secondary_txt group-hover:text-blue_color transition-colors" 
                            size={20}
                          />
                          <p className="text-secondary_txt group-hover:text-blue_color mb-0 text-sm md:text-base transition-colors">
                            تلگرام
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Zoom>

            {/* Contact Form */}
            <Zoom delay={500} duration={2000}>
              <div className="bg-card_bg_color p-4 md:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h2 className="font-dana-bold text-xl md:text-2xl text-primary_txt_color text-center mb-6">
                  ارسال پیام
                </h2>
                <form className="flex flex-col space-y-4 md:space-y-5">
                  <input
                    className="bg-[#82828262] font-dana-regular py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                  />
                  <input
                    className="bg-[#82828262] font-dana-regular py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm"
                    type="email"
                    placeholder="آدرس ایمیل"
                  />
                  <textarea
                    className="bg-[#82828262] font-dana-regular py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue_color transition-all duration-300 text-sm md:text-base placeholder:text-xs md:placeholder:text-sm min-h-[120px]"
                    rows="4"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                  <button 
                    type="submit"
                    className="bg-blue_color font-dana-regular text-primary_bg_color py-3 rounded-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base font-medium shadow-md hover:shadow-lg"
                  >
                    ارسال
                  </button>
                </form>
              </div>
            </Zoom>

          </div>
        </div>

      </div>
    </div>
  );
}