import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

async function getData() {
  try {
    const response = axios.get(`${BASE_URL}post/read.php`);
    return (await response).data.data;
  } catch (error) {
    console.log(error);
  }
}
export default getData;
