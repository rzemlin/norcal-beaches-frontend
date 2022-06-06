import React, { useState } from "react";

const BeachForm = ({ onAddBeach }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    img_url: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeach = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, visited: false }),
    };

    fetch("http://localhost:4000/beaches", newBeach)
      .then((resp) => resp.json())
      .then((beach) => {
        onAddBeach(beach);
        setFormData({
          name: "",
          about: "",
          phase: "",
          link: "",
          image: "",
        });
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3 align="center">Add A New Beach</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="location">Location</label>
        <select
          name="location"
          id="location"
          onChange={handleChange}
          value={formData.location}
          >
          <option value="">Choose a Location</option>
          <option value="1">Marin</option>
          <option value="2">Sonoma</option>
          <option value="3">Mendocino</option>
          <option value="4">Humboldt</option>
        </select>
        
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        

        <label htmlFor="img_url">Image Url</label>
        <input
          type="text"
          id="img_url"
          name="img_url"
          onChange={handleChange}
          value={formData.img_url}
        />

        <button align="right" type="submit">Add Beach</button>
      </form>
    </section>
  );
};

export default BeachForm;