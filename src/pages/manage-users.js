import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageUsers() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    // 1. get posts from local storage
    const users = JSON.parse(localStorage.getItem("users"));
    // 2. dump it to posts state
    setUsers(users);
  }, []);

  const deleteUser = (id) => {
    // 1. use .filter to filter out the selected post
    const newUsers = users.filter((u) => parseInt(u.id) !== parseInt(id));
    // 2. update the newposts into the storage
    localStorage.setItem("users", JSON.stringify(newUsers));
    // 3. update the state
    setUsers(newUsers);
  };
    return (
        <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Users</h1>
        <div className="text-end">
          <Link to="/manage-users-add" className="btn btn-primary btn-sm"
            >Add New User
            </Link>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
          {users
              ? users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className="badge bg-success">{user.role}</span>
                      </td>
                      <td className="text-end">
                        <div className="buttons">
                          <Link
                            to={`/manage-users-edit/${user.id}`}
                            className="btn btn-success btn-sm me-2 "
                          >
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              deleteUser(user.id);
                            }}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard" className="btn btn-link btn-sm"
          ><i className="bi bi-arrow-left"></i> Back to Dashboard
          </Link>
      </div>
    </div>
    );
}