import axios from 'axios';

async function userLogin(username, password, email, firstname, lastname) {
  const data = {
    username: username,
    password: password,
    email: email,
    firstname: firstname,
    lastname: lastname,
  };

  const config = {
    method: 'post',
    url: `http://localhost:/PHP_REST_MYBLOG/api/user/read_single.php?username=${username}`,
  };

  axios(config)
    .then(async (response) => {
      console.log(response.data);
      return await response.data;
    })
    .catch((error) => console.log(error));

  console.log('a?');

  // try {
  //   console.log('a');
  //   const response = axios.post(
  //     `http://localhost/PHP_REST_MYBLOG/api/user/create.php?username=${username}&password=${password}&email=${email}&firstname=${firstname}&lastname=${lastname}`
  //   );
  //   return await response;
  // } catch (error) {
  //   console.log(error);
  // }
}

export default userLogin;
