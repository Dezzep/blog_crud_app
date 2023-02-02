# Anti Blog CRUD app.


## About
This is a CRUD app that allows users to create an account and create blog 
posts.

### Site Structure

- Home Page: Has a call to action button that brings a user to the sign in page.

- Login / Sign up 

- Dashboard: Once signed in, a user is able to view, create, edit or delete blogs that belong to them. 

- Blogs: Whether or not the user is signed in, they may view all of the blog posts on the website.

---
A 'blog' post consists of a Title, Body, Category, and Username.

- Once a blog is created, a user may edit the contents of their blog post.
- A user may delete blog posts that belong to them.
- If the user is logged in as admin, they have access to every blog post and may delete or edit any blog from the dashboard. 

Theme Picker: In the navbar, you may select from a variety of themes, your selected theme will be stored to your browsers local storage. 


## Technologies used:

### Frontend

- React
- React Router
- Tailwindcss
- DaisyUI

### Backend

- PHP RESTful api
- MariaDB

### Future implementations
- Email verification
- Supporting markdown, which would enable users to have blog posts that aren't just a body of text
- Ability to like blog posts
- A method for filtering blogs


