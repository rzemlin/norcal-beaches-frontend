import React, { useState } from "react";

const BeachForm = ({ onAddBeach }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    img_url: "",
    description: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       fetch("http://localhost:4000/beaches", {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
     },
    body: JSON.stringify(formData),
  })
      .then((resp) => resp.json())
      .then((beach) => {
        onAddBeach(beach);
        setFormData({
          name: "",
          location: "",
          description: "",
          img_url: "",
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
          onChange={handleOnChange}
          value={formData.name}
        />

        <label htmlFor="location">Location</label>
        <select
          name="location"
          id="location"
          onChange={handleOnChange}
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
          onChange={handleOnChange}
          value={formData.description}
        />
        

        <label htmlFor="img_url">Image Url</label>
        <input
          type="text"
          id="img_url"
          name="img_url"
          onChange={handleOnChange}
          value={formData.img_url}
        />

        <button align="right" type="submit">Add Beach</button>
      </form>
    </section>
  );
};

export default BeachForm;