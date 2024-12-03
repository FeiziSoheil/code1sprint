import React from "react";
import { useMousePosition } from "../../Hooks/useMouse";
import { Link } from "react-router-dom";

export default function PlanCard({ planID, title, price, des, futures, bgColor }) {
  const mouseHandler = useMousePosition();
  console.log(planID);
  

  return (
    <div
      onMouseMove={mouseHandler}
      style={{ "--card-bg": "#1F1F1F" }}
      className={`w-[25rem] min-w-80 max-w-[30rem] border-card mt-3 h-max p-8  space-y-5 cursor-pointer  bg-card_bg_color overflow-hidden `}
    >
      <div className="relative z-20 text-3xl mb-5 text-center font-dana-demibold">
        <h2 className=" text-primary_txt_color">{title}</h2>
        <h3 className="text-3xl text-blue_color">شروع از 7 تومن</h3>
      </div>
      <p className="relative z-20 font-dana-regular text-secondary_txt">
        {" "}
        توضیحات : {des}
      </p>
      <div className="relative z-20 font-dana-regular text-secondary_txt">
        <h4>ویژگی : </h4>
        <ul>
          {futures.map((future) => (
            <li className="py-1 opacity-70"> {future}</li>
          ))}
        </ul>
      </div>
      <button
      className="relative z-20 w-full py-2 text-lg rounded-sm font-dana-regular bg-blue_color ">
       <Link className="no-underline text-secondary_bg_color" to={`/plan/${planID}`}> ثبت سفارش</Link>
      </button>
     
    </div>
  );
}
