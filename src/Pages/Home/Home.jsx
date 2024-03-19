import React from 'react'
import MainPage from '../../components/Hero/MainPage'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Service from '../../components/service/Service'
import BlogsComp from '../../components/Blogs/BlogsComp '
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <MainPage/>
    <WhoWeAre/>
    <Service/>
    <BlogsComp/>
    <Footer/>
    </>
  )
}

export default Home