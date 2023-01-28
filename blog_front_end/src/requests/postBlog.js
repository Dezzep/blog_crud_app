import axios from 'axios';

async function postBlog(title, content, author, category_id) {
  const data = {
    title,
    body: content,
    author,
    category_id,
  };

  const config = {
    method: 'post',
    data: data,
    url: 'http://localhost:/PHP_REST_MYBLOG/api/post/create.php',
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return 0;
  }
}
export default postBlog;
