import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

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
    url: `${BASE_URL}post/create.php`,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return 0;
  }
}
export default postBlog;
