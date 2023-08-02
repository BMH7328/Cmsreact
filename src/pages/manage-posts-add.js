import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ManagePostsAdd() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitForm = () => {
    // 1. get the existing posts from the local storage
    let posts = JSON.parse(localStorage.getItem("posts"));

    /* 2. make sure the posts is not empty 
      if posts is empty, then assign the default array to it
    */
    if (!posts) posts = []; // assign default value to the posts array

    // 3. push the new item into the posts array
    posts.push({
      id: Math.floor(Math.random() * 100000), // get random id
      title: title, // pass in the value from the title
      content: content, // pass in the value from the content
      status: "review", // set the status to "review" as default value
    });

    // 4. save array into local storage
    localStorage.setItem("posts", JSON.stringify(posts));

    // 5. redirect back to /manage-posts
    navigate("/manage-posts");
  };

  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Add New Post</h1>
        </div>
        <div className="card mb-2 p-4">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitForm();
            }}
          >
            <div className="mb-3">
              <label for="post-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="post-title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="post-content"
                rows="10"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Link to="/manage-posts" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}