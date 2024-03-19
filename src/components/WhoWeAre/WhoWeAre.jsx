import React from "react";
import home from "../../assets/h3.jpg";
import Vector from "../../assets/vector3.png";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";

const WhoWeAre = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]" id="about">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={home}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Who Are We.</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  we've been the architects of possibility. We orchestrate a
                  symphony of planning, design, supervision, and construction,
                  transforming dreams into breathtaking realities. Our team of
                  visionary artists and meticulous engineers collaborate to
                  create exceptional spaces, exceeding expectations with every
                  project.
                  <br />
                  <br />
                  Transform Your Dreams into Reality: Let us help you bridge the gap between where you are and where you want to be.
                </p>
                <div className="flex gap-6">
                  <div>
                    <MdOutlineDesignServices className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <FaHome className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <FaAutoprefixer className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
