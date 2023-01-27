import axios from 'axios';

async function checkUser(username) {
  try {
    const response = await axios.get(
      `http://localhost:/PHP_REST_MYBLOG/api/user/read_single.php?username=${username}`
    );
    return response.data;
  } catch (error) {
    return 0;
  }
}

export default checkUser;
