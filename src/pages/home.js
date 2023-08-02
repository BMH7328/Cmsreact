import { Link } from "react-router-dom";

export default function Home() {
  // get posts from local storage
  const posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <div className="container mx-auto my-5">
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      {posts
        ? posts.map((post) => {
            return (
              <div key={post.id} className="card mb-2">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <div className="text-end">
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        : null}

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
