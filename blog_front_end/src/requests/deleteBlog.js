import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const deleteBlog = async (id) => {
  try {
    await axios.delete(`${BASE_URL}post/delete.php?`, {
      data: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return 1;
};

export default deleteBlog;
