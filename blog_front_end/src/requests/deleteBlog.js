import axios from 'axios';

const deleteBlog = async (id) => {
  try {
    await axios.delete(
      `http://localhost/php_rest_myblog/api/post/delete.php?`,
      {
        data: {
          id: id,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  return 1;
};

export default deleteBlog;
