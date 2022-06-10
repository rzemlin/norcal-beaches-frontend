import React, { useState, useEffect } from "react";


const BeachEditForm = ({ beachId, onAddBeach }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    img_url: "",
  });

  const { name, location, description, img_url } = formData;
  


  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/beaches/${beachId}`)
      .then((res) => res.json())
      .then((beach) => setFormData(beach));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  



  const handleSubmit = (e) => {
    e.preventDefault();
       fetch(`http://localhost:4000/beaches/${beachId}`, {
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
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Beach</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" value={description} onChange={handleChange} />

      <label htmlFor="location">Location</label>
      <select name="location" id="location" value={location} onChange={handleChange}>
        <option value="1">Marin</option>
        <option value="2">Sonoma</option>
        <option value="3">Mendocino</option>
        <option value="4">Humboldt</option>
      </select>

      <label htmlFor="img_url">Image Url</label>
      <input
        type="text"
        id="img_url"
        name="img_url"
        value={img_url}
        onChange={handleChange}
      />

      <button type="submit">Update Beach</button>
    </form>
  );
};

export default BeachEditForm;