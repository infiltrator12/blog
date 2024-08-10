// src/components/EditProfileForm.js
import React, { useState } from 'react';

const EditProfileForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const updatedUser = await response.json();
      onSave(updatedUser);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value="{formData.name}"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value="{formData.email}"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfileForm;
