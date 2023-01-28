// http://localhost/php_rest_myblog/api/post/update.php
import axios from 'axios';
const editBlog = async (id, title, body, category, author) => {
  const data = {
    id,
    title,
    body,
    author,
    category_id: category,
  };
  const config = {
    method: 'put',
    data: data,
    url: 'http://localhost/php_rest_myblog/api/post/update.php',
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return 0;
  }
};
export default editBlog;
