const accounts = [
  {
    username: 'test',
    password: 'test',
    email: '',
    firstname: '',
    lastname: '',
  },
  {
    username: 'test2',
    password: 'test2',
    email: '',
    firstname: '',
    lastname: '',
  },
  {
    username: 'ADMIN',
    password: 'password',
    email: '',
    firstname: '',
    lastname: '',
  },
];

// id,
// title,
// body,
// author,
// category,
const blogdata = [
  { id: 1, title: 'test', body: 'test', author: 'test', category: 'test' },
  { id: 2, title: 'test2', body: 'test2', author: 'test2', category: 'test2' },
];

function checkUser(user) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].username === user) {
      console.log('a');
      return 0;
    }
  }

  return true;
}

const deleteBlog = async (id) => {
  for (let i = 0; i < blogdata.length; i++) {
    if (blogdata[i].id === id) {
      blogdata.splice(i, 1);
      return 1;
    }
  }
  return 1;
};

const editBlog = async (id, title, body, category, author) => {
  console.log(category);
  const determineCategory = (cat) => {
    if (cat === 1) return 'Technology';
    if (cat === 2) return 'Gaming';
    if (cat === 3) return 'Auto';
    if (cat === 4) return 'Entertainment';
    if (cat === 5) return 'Books';
  };
  console.log(determineCategory(category));
  // determine what type category is
  console.log(typeof category);
  const x = determineCategory(category);
  console.log(x);
  for (let i = 0; i < blogdata.length; i++) {
    if (blogdata[i].id === id) {
      blogdata[i].title = title;
      blogdata[i].body = body;
      blogdata[i].category = x;
      blogdata[i].author = author;
      return 1;
    }
  }
  return 1;
};

async function getData() {
  return blogdata;
}

async function postBlog(title, content, author, category_id) {
  const generateID = () => {
    return Math.floor(Math.random() * 1000000000);
  };
  const determineCategory = () => {
    switch (category_id) {
      case 1:
        return 'Technology';
      case 2:
        return 'Gaming';
      case 3:
        return 'Auto';
      case 4:
        return 'Entertainment';
      default:
        return 'Books';
    }
  };
  const x = determineCategory();

  blogdata.push({
    id: generateID(),
    title,
    body: content,
    author,
    category: x,
  });
  return 1;
}

async function userCreate(username, password, email, firstname, lastname) {
  accounts.push({
    username,
    password,
    email,
    firstname,
    lastname,
  });
  return 1;
}

async function userLogin(username, password) {
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].username === username &&
      accounts[i].password === password
    ) {
      return [accounts[i]];
    }
  }
  return 0;
}

export {
  checkUser,
  deleteBlog,
  editBlog,
  getData,
  postBlog,
  userCreate,
  userLogin,
};
