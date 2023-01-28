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
// const data = {
//   title,
//   body: content,
//   author,
//   category_id,
// };

// const config = {
//   method: 'post',
//   data: data,
//   url: 'http://localhost:/PHP_REST_MYBLOG/api/post/create.php',
// };
// try {
//   const response = await axios(config);
//   return response.data;
// } catch (error) {
//   return 0;
// }
// }
export default editBlog;
