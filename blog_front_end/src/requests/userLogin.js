import axios from 'axios';
var Hashes = require('jshashes');
var MD5 = new Hashes.MD5();
const BASE_URL = process.env.REACT_APP_BASE_URL;

async function userLogin(username, password) {
  try {
    const response = axios.post(
      `${BASE_URL}user/login.php?username=${username}&password=${MD5.hex(
        password
      )}`
    );
    return (await response).data.data;
  } catch (error) {
    console.log(error);
  }
}
export default userLogin;
