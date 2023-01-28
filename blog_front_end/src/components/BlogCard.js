import { useState, useEffect } from 'react';
import editBlog from '../requests/editBlog';

const BlogCard = ({
  id,
  title,
  body,
  author,
  category,
  editable,
  handleDelete,
  handleEdit,
}) => {
  const [edit, setEdit] = useState(false);
  const [selection, setSelection] = useState(category);
  const [blogTitle, setBlogTitle] = useState(
    title.replace(/&quot;/g, '"').replace(/&#039;/g, "'")
  );
  const [blogContent, setBlogContent] = useState(body);
  const [buttonBackground, setButtonBackground] = useState('btn-success');
  const [buttonText, setButtonText] = useState('Save Changes');

  useEffect(() => {
    setSelection(category);
  }, [category]);

  const checkFields = () => {
    if (blogTitle && blogContent) {
      return true;
    }
  };

  const cancelClicked = () => {
    setSelection(category);
    setBlogTitle(title);
    setBlogContent(body);
    setEdit(false);
  };

  const determineCategory = (option) => {
    switch (option) {
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
  // title = title.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  // this basically means that if you find a &quot; in the title, replace it with a "
  // and if you find a &#039; in the title, replace it with a '
  // this is because the API returns the title with these characters in it (to avoid sql injection)
  // and we need to replace them with the actual characters so that the user can see them properly
  return (
    <div className="card max-w-4xl bg-base-200 p-16 shadow-xl mx-auto border-base-100  hover:border-primary-focus border-2 mt-4">
      {!edit ? (
        <div className="card-body">
          <p className="badge badge-primary mb-4">{category}</p>
          <h2 className="card-title text-2xl underline underline-offset-8">
            {title.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
          </h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <p className="text-primary-content">
              Author: <span className="text-accent text-lg ml-1">{author}</span>
            </p>
          </div>
          {editable === author ? (
            <div className="flex gap-4 mt-12">
              <button
                className="btn btn-warning w-24"
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-error w-24"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col">
          <select
            className="select select-primary w-36 mt-4 ml-2"
            name="selection"
            onChange={(e) => setSelection(e.target.value)}
            value={selection}
          >
            <option disabled></option>
            <option>Technology</option>
            <option>Gaming</option>
            <option>Auto</option>
            <option>Entertainment</option>
            <option>Books</option>
          </select>
          <input
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
            className="input input-primary max-w-sm mt-3 ml-2 border-b-0 text-xl"
            type="text"
            name="blog_title"
            placeholder="Your title here..."
          />
          <textarea
            value={blogContent}
            className="textarea textarea-primary h-24 ml-2"
            name="blog_body"
            placeholder="Your content here..."
            onChange={(e) => {
              setBlogContent(e.target.value);
            }}
          ></textarea>
          <div className="flex ml-2 gap-6 mt-4">
            <button
              className={`btn ${buttonBackground}`}
              onClick={async () => {
                if (checkFields()) {
                  await editBlog(
                    id,
                    blogTitle,
                    blogContent,
                    determineCategory(selection),
                    author
                  );
                  handleEdit();
                  setEdit(false);
                } else {
                  setButtonBackground('btn-error');
                  setButtonText('Please fill out all fields');
                  setTimeout(() => {
                    setButtonBackground('btn-success');
                    setButtonText('Save Changes');
                  }, 2500);
                }
              }}
            >
              {buttonText}
            </button>
            <button
              className="btn btn-secondary "
              onClick={() => cancelClicked()}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
