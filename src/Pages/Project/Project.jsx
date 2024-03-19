import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'; // Corrected import path
import ProjectBanner from '../../Layouts/project/ProjectBanner';
import Detail from '../../Layouts/project/Detail';
import ImageSection from '../../Layouts/project/ImageSection';
import BlogsData from '../../components/Blogs/blogsData.json';
import ImageData from '../../galleryImage.json';

import { useLocation } from 'react-router-dom';

const Project = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const decodedData = atob(queryParams.get('id'));

  const [projectData, setProjectData] = useState(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const filteredData = BlogsData.filter(item => item.id === parseInt(decodedData));
    const filteredImage = ImageData.filter(item => item.id === parseInt(decodedData));
    if (filteredData.length > 0) {
      setImageData(filteredImage[0]);
      setProjectData(filteredData[0]); // Use [0] to get the first item from the filtered array
    } else {
      console.error('No matching ID found in blogsData.json');
    }
  }, [decodedData]);

  if (!projectData) {
    return null; // Render loading spinner or message here while data is being fetched
  }

  return (
    <>
      <Navbar />
      <ProjectBanner image={imageData} />
      <Detail data={projectData} image={imageData} />
      <ImageSection  image={imageData} />
      <Footer />
    </>
  );
};

export default Project;
