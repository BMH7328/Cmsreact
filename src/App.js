import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts-add";
import ManagePostsEdit from "./pages/manage-posts-edit";
import ManageUsers from "./pages/manage-users";
import ManageUsersAdd from "./pages/manage-users-add";
import ManageUsersEdit from "./pages/manage-users-edit";
import Post from "./pages/post";

/*
    / -> home
    /dashboard -> Dashboard
    /manage-posts -> manage posts

    if the post id is 4
    PHP:
    /post?id=4
    $_GET['id']

    REACT:
    /post/4

    PHP:
    /manage-posts-edit?id=4

    REACT
    /manage-posts-edit/4

*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-posts-add" element={<ManagePostsAdd />} />
        <Route path="/manage-posts-edit/:id" element={<ManagePostsEdit />} />
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-users-add" element={<ManageUsersAdd />} />
        <Route path="/manage-users-edit/:id" element={<ManageUsersEdit />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
