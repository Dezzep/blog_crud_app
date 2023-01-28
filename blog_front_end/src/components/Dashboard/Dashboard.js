import Login from './Login';
import BlogCreate from './blogCreation/BlogCreate';
import getData from '../../requests/getAllBlogs';
import BlogCard from '../BlogCard';
import deleteBlog from '../../requests/deleteBlog';
import { useState, useEffect } from 'react';

const Dashboard = ({ setUserCredentials, userCredentials }) => {
  const [blogs, setBlog] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getAllBlogs = async () => {
      const blogsFromServer = await getData();
      setBlog(blogsFromServer);
    };
    getAllBlogs();
  }, [render]);

  const handleDelete = async (id) => {
    console.log('delete');
    console.log(await deleteBlog(id));

    setRender(render + 1);
  };

  return (
    <div className="mt-24">
      {Object.keys(userCredentials).length > 0 ? (
        <div>
          Welcome, {userCredentials[0].username}
          <BlogCreate
            userCredentials={userCredentials}
            setRender={setRender}
            render={render}
          />
          <div>
            {blogs.map((blog) => (
              <div key={blog.id + 'dashboard'}>
                {blog.author === userCredentials[0].username ? (
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    author={blog.author}
                    category={blog.category_name}
                    editable={userCredentials[0].username}
                    handleDelete={handleDelete}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Login setUserCredentials={setUserCredentials} />
      )}
    </div>
  );
};

export default Dashboard;
