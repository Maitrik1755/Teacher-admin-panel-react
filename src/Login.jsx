import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("teacher");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    

    const user = JSON.parse(localStorage.getItem("user")) || [];
    const existingUser = user.find((u) => u.email === email && u.password === password && u.role === role);
    if (!existingUser) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

    if (existingUser.role == "teacher") {
      alert("Login successful");
      navigate("/admin");
    } else {
      alert("Student login not allowed.");
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="card shadow-sm border-0">
          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-1">Welcome back</h3>
            <p className="text-muted mb-4">Login to access the admin panel</p>

            <form autoComplete="off" onSubmit={handleSubmit}>

              {/* Role dropdown */}
              <div className="mb-3">
                <label className="form-label">Login as</label>
                <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-select">
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>

              {/* Fake inputs to block Chrome autofill */}
              <input type="text" style={{ display: "none" }} />
              <input type="password" style={{ display: "none" }} />

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                />
              </div>

              {/* Login button */}
              <button
                onClick={handleSubmit}
                className="btn btn-warning w-100 fw-semibold py-2"
              >
                Login
              </button>

            </form>

            {/* Register link */}
            <div className="text-center mt-4">
              <span className="text-muted">Don’t have an account?</span>{" "}
              <button
                onClick={() => navigate("/register")}
                className="btn btn-link p-0 text-decoration-none"
                type="button"
              >
                Create one
              </button>
            </div>

          </div>
        </div>

        <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: 13 }}>
          Tip: Choose <b>Teacher</b> to access admin panel.
        </p>

      </div>
    </div>
  );
};

export default Login;
