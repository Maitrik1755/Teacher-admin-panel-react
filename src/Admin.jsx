import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
   <div className="min-vh-100 bg-light">

      {/* Navbar */}
      <nav className="navbar bg-warning px-4 d-flex justify-content-between position-relative">
        <span className="fw-bold text-dark">Dashboard</span>

        {/* Profile area */}
        <div className="position-relative">

          {/* Profile Logo Button */}
          <button
            className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40 }}
            onClick={() => setShowProfile(!showProfile)}
          >
            {user?.fullName?.charAt(0).toUpperCase() || "U"}
          </button>

          {/* Profile Card (right side below button) */}
          {showProfile && (
            <div
              className="card p-3 shadow position-absolute end-0 mt-2"
              style={{ width: 250 }}
            >
              <h6 className="mb-1">{user?.fullName}</h6>
              <p className="mb-1 text-muted" style={{ fontSize: 13 }}>
                {user?.email}
              </p>
              <p className="mb-2">
                <span className="badge bg-dark">{user?.role}</span>
              </p>

              <button onClick={logout} className="btn btn-danger w-100">
                Logout
              </button>
            </div>
          )}

        </div>
      </nav>

      {/* Subjects + Students */}
      <div className="container mt-3">
        <div className="row justify-content-center g-4">

          {/* Subjects Box */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Subjects</h5>

                <input
                  className="form-control mb-3"
                  placeholder="Add Subject"
                />

                <button className="btn btn-warning w-100 mb-3">
                  Add Subject
                </button>

                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Maths <span className="text-danger">X</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Science <span className="text-danger">X</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          {/* Students Box */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Students</h5>

                <input
                  className="form-control mb-3"
                  placeholder="Add Student"
                />

                <button className="btn btn-warning w-100 mb-3">
                  Add Student
                </button>

                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Rahul <span className="text-danger">X</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Priya <span className="text-danger">X</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Admin;
