import axios from 'axios';

async function userLogin(username, password) {
  try {
    const response = axios.get(
      `http://localhost:/PHP_REST_MYBLOG/api/user/login.php?username=${username}&password=${password}`
    );
    return (await response).data.data;
  } catch (error) {
    console.log(error);
  }
}
export default userLogin;
