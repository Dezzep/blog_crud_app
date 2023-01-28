const BlogCard = ({
  id,
  title,
  body,
  author,
  category,
  editable,
  handleDelete,
}) => {
  return (
    <div className="card max-w-4xl bg-base-200 p-16 shadow-xl mx-auto border-base-100  hover:border-primary-focus border-2 mt-4">
      <div className="card-body">
        <p className="badge badge-primary mb-4">{category}</p>
        <h2 className="card-title text-2xl underline underline-offset-8">
          {title}
        </h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <p className="text-primary-content">
            Author: <span className="text-accent text-lg ml-1">{author}</span>
          </p>
        </div>
        {editable === author ? (
          <div className="flex gap-4 mt-12">
            <button className="btn btn-warning w-24">Edit</button>
            <button
              className="btn btn-error w-24"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogCard;
