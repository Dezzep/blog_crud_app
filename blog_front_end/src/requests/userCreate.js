import axios from 'axios';
var Hashes = require('jshashes');
var MD5 = new Hashes.MD5();
const BASE_URL = process.env.REACT_APP_BASE_URL;

async function userLogin(username, password, email, firstname, lastname) {
  const data = {
    username: username,
    password: MD5.hex(password),
    email: email,
    firstname: firstname,
    lastname: lastname,
  };

  const config = {
    method: 'post',
    data: data,
    url: `${BASE_URL}user/create.php`,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return 0;
  }
}
export default userLogin;
