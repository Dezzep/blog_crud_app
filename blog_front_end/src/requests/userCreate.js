import axios from 'axios';

async function userLogin(username, password, email, firstname, lastname) {
  const data = {
    username: username,
    password: password,
    email: email,
    firstname: firstname,
    lastname: lastname,
  };

  console.log(data);
  const config = {
    method: 'post',
    data: data,
    url: 'http://localhost:/PHP_REST_MYBLOG/api/user/create.php',
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return 0;
  }
}
export default userLogin;
