import React from 'react'
import bgImg from '../../assets/vector3.png'
const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
const MainPage = () => {
  
   
  return (
    <>
    <div  className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImage} id='home'>

    <div className="container pb-8 sm:pb-0">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
              Transform Your Dreams into Reality With {" "}
                <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  EPIC
                </span>{" "}
                Designes
              </h1>
              <p className="text-sm ">
              Don't let your dreams stay just dreams. Turn them into reality with our expertise and guidance.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Contact Now
                </button>
              </div>
            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default MainPage