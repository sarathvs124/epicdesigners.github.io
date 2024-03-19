import React from 'react'
import bgImg from '../../assets/house1/frontImage.jpeg'

const ProjectBanner = ({ image }) => {
  const { src } = image;
  const bgImage = {
    backgroundImage: `url(${src[0]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
    <div  className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImage}>

    <div className="container pb-8 sm:pb-0">
       
    </div>
    </div>
    </>
  )
}

export default ProjectBanner