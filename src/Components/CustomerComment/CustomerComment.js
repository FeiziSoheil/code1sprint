import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { userFeedback } from "../../Data";

export default function CustomerComment() {
  return (
    <section className="py-10 bg-black sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl  leading-tight font-dana-bold text-primary_txt_color sm:text-4xl lg:text-5xl">
            مشتری ها درمورد ما چه می گویند 
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {userFeedback.map((feedBack, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-primary_bg_color  rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                transition: {
                  duration: 0.3,
                  type: "spring", // Change transition type to make it more natural
                  stiffness: 300, // Adjust stiffness for smoother motion
                },
              }}
            >
              <div className="px-4 py-6 text-colo">
                <div className="flex items-center justify-between h-max">
                  <div className="flex gap-3">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src={feedBack.profilePicture}
                      alt={feedBack.name}
                    />
                    <div className="text-primary_txt_color">
                      <p className="text-base font-dana-regular truncate">
                        {feedBack.name}
                      </p>
                      <p className="text-sm text-start -mt-4 text-gray-600 truncate">
                        {feedBack.username}
                      </p>
                    </div>
                  </div>

                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>

                <blockquote className="mt-2 flex flex-col font-dana-regular">
                  <p className="text-base text-primary_txt_color h-24">{feedBack.feedback}</p>
                  <span className="block text-sky-500 h-max text-light-blue-400 mt-5">
                    {feedBack.hashtag}
                  </span>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
