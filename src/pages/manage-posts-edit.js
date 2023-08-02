import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ManagePostsEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("review");

  // this will be called once when the page is loaded
  useEffect(() => {
    // 1. load all the posts from the local storage
    const posts = JSON.parse(localStorage.getItem("posts"));
    // 2. find the single post with the provided id inside the posts array
    const post = posts
      ? posts.find((p) => parseInt(p.id) === parseInt(id))
      : null;

    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setStatus(post.status);
    }
  }, []); // empty array so that only trigger once when page is loaded

  const updatePost = () => {
    // 1. load the posts from local storage
    const posts = JSON.parse(localStorage.getItem("posts"));
    // 2. use .map to modify the array
    const newPosts = posts.map((p) => {
      if (parseInt(p.id) === parseInt(id)) {
        p.title = title;
        p.content = content;
        p.status = status;
      }
      return p;
    });
    // 3. save the newPosts into the local storage
    localStorage.setItem("posts", JSON.stringify(newPosts));
    // 4. redirect back to /manage-posts
    navigate("/manage-posts");
  };

  return (
    <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Edit Post</h1>
      </div>
      <div className="card mb-2 p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updatePost();
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
              onChange={(event) => setTitle(event.target.value)}
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
          <div className="mb-3">
            <label for="post-content" className="form-label">
              Status
            </label>
            <select
              className="form-control"
              id="post-status"
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <option value="review">Pending for Review</option>
              <option value="publish">Publish</option>
            </select>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Update
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
  );
}

