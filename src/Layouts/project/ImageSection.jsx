import React from 'react'
import video from "../../assets/video/hsvideo1.mp4";

const ImageSection = ({  image }) => {
    const { src } = image;

    
  return (
    <>
    <div className='container'>

     

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={src[5]} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg"src={src[4]} alt=""/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg"src={src[0]} alt=""/>
        </div>
        <div>
                   <video className="h-auto max-w-full rounded-lg"  autoPlay muted loop>
      <source src={src[8]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            {/* <img className="h-auto max-w-full rounded-lg" src={src[7]} alt=""/> */}
        </div>
      
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={[src[3]]} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={[src[6]]} alt=""/>
        </div>
       
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={[src[7]]} alt=""/>
        </div>
        <div>
           
        <video className="h-auto max-w-full rounded-lg"  autoPlay muted loop>
      <source src={src[9]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
       
    </div>
</div>
   
        </div>
        
        </>
  )
}

export default ImageSection