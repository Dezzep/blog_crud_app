import { useEffect, useState } from 'react';
import Login from './Login';

import getData from '../requests/getAllBlogs';
import BlogCard from './BlogCard';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [userCredentials, setUserCredentials] = useState('');

  useEffect(() => {
    const getAllBlogs = async () => {
      const blogsFromServer = await getData();
      setBlogs(blogsFromServer);
    };
    getAllBlogs();
  }, []);

  console.log(userCredentials);

  return (
    <div>
      <div className="flex flex-col gap-6 px-12">
        {userCredentials.length === 0 ? null : (
          <h1 className="text-4xl">
            Welcome back {userCredentials[0].username}
          </h1>
        )}
        <Login setUserCredentials={setUserCredentials} />
        <h1 className="text-6xl">
          Welcome to blog nation, the place where we blog
        </h1>
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
    </div>
  );
};

export default Blogs;
