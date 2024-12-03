import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const container = {
    hidden: {
      opacity: 0,
      y: 100, // شروع از 100 پیکسل پایین‌تر
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-primary_bg_color relative"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // شروع انیمیشن وقتی 30% فوتر در دید قرار گرفت
      variants={container}
    >
      {/* نوار آبی بالای فوتر */}
      <motion.div
        className="h-2 bg-blue-500 w-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* خط تزئینی طلایی */}
      <motion.div
        className="h-1 bg-blue_color w-full opacity-50"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {/* بخش معرفی */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-blue_color font-dana-bold text-xl mb-6">
              کدآنلاین
            </h3>
            <p className="text-secondary_txt font-dana-regular text-sm leading-7">
              ما در کدآنلاین با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا،
              خدمات طراحی و توسعه وب را با بالاترین کیفیت ارائه می‌دهیم.
            </p>
          </motion.div>

          {/* دسترسی سریع */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-blue_color font-dana-bold text-xl mb-6">
              دسترسی سریع
            </h3>
            <ul className="space-y-3">
              {[
                "صفحه اصلی",
                "درباره ما",
                "خدمات",
                "نمونه کارها",
                "تماس با ما",
              ].map((item, index) => (
                <motion.li key={index} variants={item}>
                  <Link
                    to={
                      item === "صفحه اصلی"
                        ? "/"
                        : item === "درباره ما"
                        ? "/aboutUS"
                        : item === "خدمات"
                        ? "/plan/:planID"
                        : item === "نمونه کارها"
                        ? "/expWorks"
                        : "/" // Default to home if no match
                    }
                    className="text-secondary_txt font-dana-regular text-sm hover:text-blue_color transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-blue_color">»</span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* خدمات */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-blue_color font-dana-bold text-xl mb-6">
              خدمات
            </h3>
            <ul className="space-y-3">
              {[
                "طراحی سایت",
                "توسعه وب اپلیکیشن",
                "طراحی رابط کاربری",
                "بهینه‌سازی سایت",
                "پشتیبانی و نگهداری",
              ].map((item, index) => (
                <motion.li key={index} variants={item}>
                  <a
                    href="#"
                    className="text-secondary_txt font-dana-regular text-sm hover:text-blue_color transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-blue_color">»</span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* اطلاعات تماس */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-blue_color font-dana-bold text-xl mb-6">
              اطلاعات تماس
            </h3>
            <div className="space-y-4">
              <motion.a
                variants={item}
                href="tel:+989123456789"
                className="flex items-center gap-3 text-secondary_txt hover:text-blue_color transition-colors duration-300"
              >
                <FaPhone className="text-blue_color" size={18} />
                <span className="font-dana-regular text-sm">۰۹۱۲۳۴۵۶۷۸۹</span>
              </motion.a>
              <motion.a
                variants={item}
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-secondary_txt hover:text-blue_color transition-colors duration-300"
              >
                <MdEmail className="text-blue_color" size={20} />
                <span className="font-dana-regular text-sm">
                  info@codeonline.ir
                </span>
              </motion.a>
              <motion.div
                variants={item}
                className="flex items-center gap-3 text-secondary_txt"
              >
                <FaMapMarkerAlt className="text-blue_color" size={20} />
                <span className="font-dana-regular text-sm">
                  تهران، خیابان ولیعصر
                </span>
              </motion.div>

              {/* شبکه‌های اجتماعی */}
              <motion.div
                variants={item}
                className="flex items-center gap-4 pt-4"
              >
                {[
                  { icon: FaTelegram, link: "https://t.me/username" },
                  { icon: FaInstagram, link: "https://instagram.com/username" },
                  { icon: FaWhatsapp, link: "https://wa.me/989123456789" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary_txt hover:text-blue_color transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* کپی‌رایت */}
        <motion.div
          variants={item}
          className="border-t border-[#ffffff1a] mt-12 pt-8 text-center"
        >
          <p className="text-secondary_txt font-dana-regular text-sm">
            تمامی حقوق این وب‌سایت متعلق به{" "}
            <span className="text-blue_color">کدآنلاین</span> می‌باشد. &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
