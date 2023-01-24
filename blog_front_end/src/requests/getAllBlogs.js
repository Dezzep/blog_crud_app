import axios from 'axios';

async function getData() {
  try {
    const response = axios.get(
      'http://localhost:/PHP_REST_MYBLOG/api/post/read.php'
    );
    return (await response).data.data;
  } catch (error) {
    console.log(error);
  }
}
export default getData;
