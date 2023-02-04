import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

async function checkUser(username) {
  try {
    const response = await axios.get(
      `${BASE_URL}user/read_single.php?username=${username}`
    );
    return response.data;
  } catch (error) {
    return 0;
  }
}

export default checkUser;
