import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
const [role, setRole] = useState("teacher")
const [email, setEmail] = useState("")
const [fullName, setFullName] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const handleRegister = (e) => {
  e.preventDefault();

  if(!fullName || !email || !password || !confirmPassword || !role){
    alert("invalid input");
    return;
  }

    const user = JSON.parse(localStorage.getItem("user")) || [];

    const exitsingUser = user.find((u) => u.email === email);
    if(exitsingUser){
      return alert("User already exists, please login")
    } 
    if(password !== confirmPassword){
      return alert("Password and confirm password do not match")
    } 
    const newUser = {
      fullName,
      email,
      password,
      role,
      id: Date.now(),

    }

    localStorage.setItem("user", JSON.stringify([...user, newUser])); 
    alert("Registration successful, please login")
    navigate("/") 
  

   
    
  }



  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="card shadow-sm border-0">
          <div className="card-body p-4 p-md-5">
            <h3 className="fw-bold mb-1">Create account</h3>
            <p className="text-muted mb-4">Register to get started</p>
            <form autoComplete="off" onSubmit={handleRegister}>

            {/* Role */}
            <div className="mb-3">
              <label className="form-label">Register as</label>
              <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-select">
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Create password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>

            {/* Register button */}
            <button className="btn btn-warning w-100 fw-semibold py-2">
              Register

            </button>
            </form>

            {/* Login link */}
            <div className="text-center mt-4">
              <span className="text-muted">Already have an account?</span>{" "}
              <button onClick={() => navigate("/")} className="btn btn-link p-0 text-decoration-none" type="button">
                Login
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: 13 }}>
          Tip: Choose <b>Teacher</b> to access admin panel later.
        </p>
      </div>
    </div>
  );
};

export default Register;
