import axios from 'axios';
var Hashes = require('jshashes');
var MD5 = new Hashes.MD5();

async function userLogin(username, password) {
  try {
    const response = axios.post(
      `http://localhost:/PHP_REST_MYBLOG/api/user/login.php?username=${username}&password=${MD5.hex(
        password
      )}`
    );
    return (await response).data.data;
  } catch (error) {
    console.log(error);
  }
}
export default userLogin;
