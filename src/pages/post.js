import { Link, useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  // 1. load all the posts from the local storage
  const posts = JSON.parse(localStorage.getItem("posts"));
  // 2. find the single post with the provided id inside the posts array
  // method 1
  let post = null;
  if (posts) {
    // use .find to find the post with the provided id
    post = posts.find((p) => parseInt(p.id) === parseInt(id));
  }
  // method 2
  // const post = posts
  //   ? posts.find((p) => parseInt(p.id) === parseInt(id))
  //   : null;

  // if post is either undefined or null, return "post not found" message
  if (!post) return "Post no found";

  const { title = "", content = "" } = post;

  return (
    <div className="container mx-auto my-5">
      <h1 className="h1 mb-4 text-center">{title}</h1>
      <p>Post ID: {id}</p>
      <p>{content}</p>

      <div className="text-center mt-3">
        <Link to="/" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}


