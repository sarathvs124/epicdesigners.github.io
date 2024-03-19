import React from "react";
import home from "../../assets/h3.jpg";
import Vector from "../../assets/vector3.png";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";

const Detail = ({ data, image }) => {
  // Assuming data is an object with properties like title, description, image, etc.
  const { title, description, imageUrl, id } = data;
  const { src } = image;


  return (
    <>
      <div className="min-h-[550px] bg-gray-100"  >
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  {description}
                </p>
              </div>
              {/* Image section */}
              <div className="flex justify-center gap-6 mt-6 mb-6">
                <div className="border border-gray-300 rounded overflow-hidden mt-16" style={{ maxWidth: "40%" }}>
                  <img
                    src={src[1]} // Assuming imageUrl is a property in the data object
                    alt="home img"
                    className="w-full h-fit object-cover object-center"
                  />
                </div>
                <div className="border border-gray-300 rounded overflow-hidden mb-16" style={{ maxWidth: "40%" }}>
                {/* <video className="h-fit w-fit rounded-lg" controls autoPlay muted>
      <source src={src[2]} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
                  <img
                    src={src[2]} // Assuming imageUrl is a property in the data object
                    alt="home img"
                    className="w-full h-auto object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
