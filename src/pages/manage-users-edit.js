import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ManageUsersEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

      // this will be called once when the page is loaded
  useEffect(() => {
    // 1. load all the posts from the local storage
    const users = JSON.parse(localStorage.getItem("users"));
    // 2. find the single post with the provided id inside the posts array
    const user = users
      ? users.find((u) => parseInt(u.id) === parseInt(id))
      : null;

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, []); // empty array so that only trigger once when page is loaded

  const updateUser = () => {
    // 1. load the posts from local storage
    const users = JSON.parse(localStorage.getItem("users"));
    // 2. use .map to modify the array
    const newUsers = users.map((u) => {
      if (parseInt(u.id) === parseInt(id)) {
        u.name = name;
        u.email = email;
        u.role = role;
      }
      return u;
    });
    // 3. save the newPosts into the local storage
    localStorage.setItem("users", JSON.stringify(newUsers));
    // 4. redirect back to /manage-posts
    navigate("/manage-users");
  };
    return(
        <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Edit User</h1>
      </div>
      <div className="card mb-2 p-4">
        <form
        onSubmit={(event) => {
            event.preventDefault();
            updateUser();
          }}>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label for="name" className="form-label">Name</label>
                <input
              type="text"
              className="form-control"
              id="user-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
              </div>
              <div className="col">
                <label for="email" className="form-label">Email</label>
                <input
              type="text"
              className="form-control"
              id="user-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="role" className="form-label">Role</label>
            <select className="form-control"
              id="user-role"
              value={role}
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option value="">Select an option</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-users" className="btn btn-link btn-sm"
          ><i className="bi bi-arrow-left"></i> Back to Users
          </Link>
      </div>
    </div>
    );
}