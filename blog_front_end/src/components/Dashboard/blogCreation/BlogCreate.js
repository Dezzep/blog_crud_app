import { useState } from 'react';
// import postBlog from '../../../requests/postBlog';
import { postBlog } from '../../../requests/frontEndTesting';
const BlogCreate = ({ userCredentials, render, setRender }) => {
  const [createNewBlog, setCreateNewBlog] = useState(false);
  const [selection, setSelection] = useState('Select Your Blogs Category');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [buttonBackground, setButtonBackground] = useState('btn-success');
  const [buttonText, setButtonText] = useState('Create Blog');

  const determineCategory = (selection) => {
    switch (selection) {
      case 'Technology':
        return 1;
      case 'Gaming':
        return 2;
      case 'Auto':
        return 3;
      case 'Entertainment':
        return 4;
      case 'Books':
        return 5;
      default:
        return 0;
    }
  };

  const handleCancel = () => {
    setBlogTitle('');
    setBlogContent('');
    setSelection('Select Your Blogs Category');
    setCreateNewBlog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category_id = determineCategory(selection);
    if (!blogTitle) {
      setButtonText('Please enter a title');
      setButtonBackground('btn-error');
      setTimeout(() => {
        setButtonText('Create Blog');
        setButtonBackground('btn-success');
      }, 3000);
    } else if (!blogContent) {
      setButtonText('Please enter content');
      setButtonBackground('btn-error');
      setTimeout(() => {
        setButtonText('Create Blog');
        setButtonBackground('btn-success');
      }, 3000);
    } else if (category_id !== 0) {
      const response = await postBlog(
        blogTitle,
        blogContent,
        userCredentials[0].username,
        category_id
      );

      if (response) {
        setBlogTitle('');
        setBlogContent('');
        setSelection('Select Your Blogs Category');
        setCreateNewBlog(false);
        setRender(render + 1);
      }
    } else {
      setButtonText('Please select a category');
      setButtonBackground('btn-error');
      setTimeout(() => {
        setButtonText('Create Blog');
        setButtonBackground('btn-success');
      }, 3000);
    }
  };

  return (
    <div>
      {!createNewBlog ? (
        <div className="flex mb-12 mt-12">
          <button
            className="btn btn-primary mx-auto"
            onClick={() => {
              setCreateNewBlog(true);
            }}
          >
            Create a new blog post
          </button>
        </div>
      ) : (
        <div className="form-control mt-6 md:w-3/4 mx-auto  bg-base-200 p-12 max-w-6xl">
          <h1 className="text-center text-primary-content text-3xl">
            Create Your Blog
          </h1>
          <label className="label" htmlFor="blog_title">
            <span className="label-text text-lg">Title</span>
          </label>
          <input
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
            autoFocus
            className="input input-primary max-w-sm"
            type="text"
            name="blog_title"
            id="blog_title"
            placeholder="Your title here..."
          />
          <label className="mt-6 label" htmlFor="selection">
            <span className="label-text text-lg">Your blogs category</span>
          </label>
          <select
            className="select select-primary w-full max-w-xs mt-2"
            id="selection"
            name="selection"
            onChange={(e) => setSelection(e.target.value)}
            value={selection}
          >
            <option disabled defaultValue={selection}>
              Select Your Blogs Category
            </option>
            <option>Technology</option>
            <option>Gaming</option>
            <option>Auto</option>
            <option>Entertainment</option>
            <option>Books</option>
          </select>
          <label className="label mt-6" htmlFor="blog_body">
            <span className="label-text text-lg">Content</span>
          </label>
          <textarea
            className="textarea textarea-primary h-24"
            name="blog_body"
            id="blog_body"
            placeholder="Your content here..."
            onChange={(e) => {
              setBlogContent(e.target.value);
            }}
          ></textarea>
          <label className="label"></label>
          <button
            className={`btn ${buttonBackground}`}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {buttonText}
          </button>
          <button
            onClick={() => handleCancel()}
            className="w-48 ml-auto  btn btn-error mt-6"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCreate;
