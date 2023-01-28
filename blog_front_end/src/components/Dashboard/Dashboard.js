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
    console.log(await deleteBlog(id));

    setRender(render + 1);
  };
  const handleEdit = async () => {
    setRender(render + 1);
  };

  return (
    <div className="mt-24">
      {Object.keys(userCredentials).length > 0 ? (
        <div>
          <div className="flex flex-col items-end mr-12 gap-4">
            <h2 className="text-xl">Welcome, {userCredentials[0].username}</h2>
            <button
              onClick={() => {
                setUserCredentials({});
              }}
              className="btn btn-sm btn-error"
            >
              Logout
            </button>
          </div>
          <BlogCreate
            userCredentials={userCredentials}
            setRender={setRender}
            render={render}
          />
          <div>
            {blogs.map((blog) => (
              <div key={blog.id + 'dashboard'}>
                {blog.author === userCredentials[0].username ||
                userCredentials[0].username === 'ADMIN' ? (
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    body={blog.body}
                    author={blog.author}
                    category={blog.category_name}
                    editable={userCredentials[0].username}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
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
