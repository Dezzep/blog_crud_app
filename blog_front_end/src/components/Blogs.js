import getData from '../requests/getAllBlogs';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // request to get all blogs
    const getAllBlogs = async () => {
      const blogsFromServer = await getData();
      setBlogs(blogsFromServer);
    };
    getAllBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-6 px-12">
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          body={blog.body}
          author={blog.author}
          category={blog.category_name}
        />
      ))}
    </div>
  );
};

export default Blogs;
