import React from "react";
import AccordionCompo from "../AccordionCompo/AccordionCompo";


export default function MoreQuiz() {

    const accordionData = [
        { question: "آیا همه هزینه طراحی سایت باید ائل پرداخت شود؟", answer: "خیر،طبق قرارداد ما با مشتری ، بین 30 تا 50 درصد بنا به نظر ما و بسته به نوع سایت ابتدا برای هزینه های سایت دریافت می شود و مابقی قبل از تحویل دادن پروژه و بعد از تست شما عزیزان دریافت می شود" },
        { question: "چقدر طول میکشه تا سایت من اماده بشه ؟", answer: "مدت تحویل پروژه با توجه و فیوچرهای مدنظر ممکنه متغیر باشه ولی در حد معمول بین یک ماه تا 45 روز تحویل داده میشه" },
        { question: "ایا داشتن نماد الکترونیک اجباری است؟", answer: "داشتن نماد الکترونیک و در اصل اینماد برای تمام سایت ها ضروری نیست و در سایت های فروشگاهی و پزشکی و تمام سایت هایی که دارای شرایط پرداخت و سبد خرید و نیاز به مجوز های مختص خود را دارند الزامی می باشد که برای اطلاع از نحوه دریافت نماد اینماد  کلیک کنید\n" +
                "\n" +
                "نکته مهم : داشتن نماد های الکترونیک برای هر نوع سایتی باعث افزایش اعتماد مشتری به سایت می شود" },
        { question: "Getting started with Material Tailwind", answer: "Start by reading the documentation..." },
    ];

  return (
      <div className='w-full bg-black py-5'>
      <div className='container mx-auto'>
          <h2 className='font-dana-demibold mb-5 text-blue_color'>سوالات متداول</h2>
          <AccordionCompo items={accordionData} />
      </div>
      </div>
  );
}
