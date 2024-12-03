import React from "react";
import "./Header.css";
import ParticleComponent from "../Particles/Particles";

export default function Header() {
  return (
    <section className="header-section relative w-full h-screen flex items-center justify-center bg-primary_bg_color overflow-hidden">
      <ParticleComponent />
      <div className="w-full flex items-center flex-col justify-center h-full text-center px-4">
        {/* عنوان اول */}
        <h2 className="text-primary_txt_color text-2xl md:text-4xl font-dana-demibold">
          انجام خدمات طراحی و سئو سایت
        </h2>
        {/* عنوان دوم */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-dana-bold text-blue_color header-shadow-title my-6">
          کد{" "}
          <span className="header-strok-title text-primary_txt_color">
             وان
          </span>
            اسپرینت
        </h1>
      
        <a href="https://t.me/soheil_feizi" className="py-2 px-6 bg-blue_color rounded-3xl text-primary_bg_color font-dana-regular text-sm md:text-base">
          درخواست پروژه
        </a>
      </div>
    </section>
  );
}
