import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>Manage Posts</h2>
          <button className="btn">View Posts</button>
          <button className="btn">Create New Post</button>
        </div>
        <div className="admin-section">
          <h2>Manage Comments</h2>
          <button className="btn">View Comments</button>
          <button className="btn">Moderate Comments</button>
        </div>
        <div className="admin-section">
          <h2>Manage Users</h2>
          <button className="btn">View Users</button>
          <button className="btn">Add New User</button>
        </div>
        <div className="admin-section">
          <h2>Site Settings</h2>
          <button className="btn">View Settings</button>
          <button className="btn">Update Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
