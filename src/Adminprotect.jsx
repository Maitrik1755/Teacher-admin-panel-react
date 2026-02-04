import React from 'react'
import { Outlet } from 'react-router-dom';

const Adminprotect = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user || user.role !== "teacher") {
        return <div>Access Denied. You do not have permission to view this page.</div>;
    }
  return (
    < Outlet  />
  )
}

export default Adminprotect