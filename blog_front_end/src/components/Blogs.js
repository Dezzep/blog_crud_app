import { useEffect, useState } from 'react';

import getData from '../requests/getAllBlogs';
import BlogCard from './BlogCard';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [userCredentials, setUserCredentials] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const getAllBlogs = async () => {
      const blogsFromServer = await getData();
      setBlogs(blogsFromServer);
    };
    getAllBlogs();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-6 px-8 pt-36 min-h-screen">
        <div className="p-2 sm:p-12 w-screen">
          <h1 className="text-4xl mb-12  leading-relaxed">
            <span className="text-6xl">The Anti Blog</span> <br /> where you can
            read about anything <br /> and none of it matters
          </h1>
          <div className="flex flex-col gap-1 mx-auto">
            <label htmlFor="search" className="label">
              Search
            </label>
            <input
              className={`input  input-md rounded-md border-info`}
              type=""
              name="search"
              id="search"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </div>
        </div>

        {blogs
          .filter((blog) =>
            blog.body.toLowerCase().includes(filter.toLowerCase())
          )
          .map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              body={blog.body}
              filter={filter}
              author={blog.author}
              category={blog.category_name}
            />
          ))}
      </div>
    </div>
  );
};

export default Blogs;
