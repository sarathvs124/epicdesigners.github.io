import React from "react";
import BlogCard from "./BlogCard";
import BlogsData from "./blogsData.json";

const BlogsComp = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Latest Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            {/* <button className="primary-btn">View All Posts</button> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
