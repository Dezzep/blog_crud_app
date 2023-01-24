const BlogCard = ({ id, title, body, author, category }) => {
  return (
    <div className="flex flex-col p-6 bg-slate-200 shadow-xl ">
      <h3 className="text-2xl">{title}</h3>
      <p className="w-3/4 mx-auto pt-6">{body}</p>
      <p className="pt-6">Written by: {author}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default BlogCard;
