import React, { useState } from "react";
import "./create.scss";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    employmentType: [],
    experience: "",
    role: "",
    skills: "",
    schedule: "",
    locations: "",
    expired: "",
    salary: "",
    benefits: [],
    isSalaryNegotiable: false,
    isPublished: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "benefits") {
        setFormData((prevData) => ({
          ...prevData,
          benefits: checked
            ? [...prevData.benefits, value]
            : prevData.benefits.filter((benefit) => benefit !== value),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Boş sahələrin yoxlanması
    if (
      formData.title &&
      formData.content &&
      formData.employmentType.length > 0 &&
      formData.experience &&
      formData.role &&
      formData.skills &&
      formData.schedule &&
      formData.locations &&
      formData.expired &&
      formData.salary
    ) {
      // Form göndərilə bilər
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="create-container">
      <h1>Create a new job</h1>
      <div className="breadcrumb">
        <span>Dashboard</span> &gt; <span>Job</span> &gt; <span>New job</span>
      </div>
      <div className="section details">
        <h2>Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Ex: Software Engineer..."
              value={formData.title}
              onChange={handleChange}
              className={isSubmitted && !formData.title ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <label>Content</label>
            <textarea
              name="content"
              placeholder="Write something awesome..."
              value={formData.content}
              onChange={handleChange}
              className={isSubmitted && !formData.content ? "error" : ""}
            ></textarea>
          </div>
          <div className="input-group">
            <label>Employment type</label>
            <div className="checkbox-group">
              {["Full-time", "Part-time", "On demand", "Negotiable"].map(
                (type) => (
                  <label key={type}>
                    <input
                      type="checkbox"
                      name="employmentType"
                      value={type}
                      checked={formData.employmentType.includes(type)}
                      onChange={handleChange}
                    />{" "}
                    {type}
                  </label>
                )
              )}
            </div>
          </div>
          <div className="input-group">
            <label>Experience</label>
            <div className="radio-group">
              {[
                { label: "No experience", value: "No experience" },
                { label: "1 year exp", value: "1 year exp" },
                { label: "2 year exp", value: "2 year exp" },
                { label: "> 3 year exp", value: "> 3 year exp" },
              ].map((exp) => (
                <label key={exp.value}>
                  <input
                    type="radio"
                    name="experience"
                    value={exp.value}
                    checked={formData.experience === exp.value}
                    onChange={handleChange}
                  />{" "}
                  {exp.label}
                </label>
              ))}
            </div>
          </div>
          <div className="input-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={isSubmitted && !formData.role ? "error" : ""}
            >
              <option value="">Select Role</option>
              <option value="CTO">CTO</option>
              <option value="Developer">Developer</option>
              {/* Daha çox seçim əlavə edə bilərsiniz */}
            </select>
          </div>
          <div className="input-group">
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="+ Skills"
              value={formData.skills}
              onChange={handleChange}
              className={isSubmitted && !formData.skills ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <label>Working schedule</label>
            <input
              type="text"
              name="schedule"
              placeholder="+ Schedule"
              value={formData.schedule}
              onChange={handleChange}
              className={isSubmitted && !formData.schedule ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <label>Locations</label>
            <input
              type="text"
              name="locations"
              placeholder="+ Locations"
              value={formData.locations}
              onChange={handleChange}
              className={isSubmitted && !formData.locations ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <label>Expired</label>
            <input
              type="date"
              name="expired"
              placeholder="DD/MM/YYYY"
              value={formData.expired}
              onChange={handleChange}
              className={isSubmitted && !formData.expired ? "error" : ""}
            />
          </div>
          <div className="input-group salary">
            <label>Salary</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="salary"
                  value="Hourly"
                  checked={formData.salary === "Hourly"}
                  onChange={handleChange}
                />{" "}
                Hourly
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  value="Custom"
                  checked={formData.salary === "Custom"}
                  onChange={handleChange}
                />{" "}
                Custom
              </label>
            </div>
            <input
              type="number"
              name="salaryValue"
              placeholder="$ 0.00"
              value={formData.salaryValue}
              onChange={handleChange}
              className={isSubmitted && !formData.salary ? "error" : ""}
            />
          </div>
          <div className="input-group">
            <label>Benefits</label>
            <div className="checkbox-group">
              {[
                "Free parking",
                "Travel",
                "Health care",
                "Health insurance",
                "Paid time off",
                "Bonus commission",
                "Device support",
                "Training",
                "Retirement plans",
                "Flexible work schedule",
              ].map((benefit) => (
                <label key={benefit}>
                  <input
                    type="checkbox"
                    name="benefits"
                    value={benefit}
                    checked={formData.benefits.includes(benefit)}
                    onChange={handleChange}
                  />{" "}
                  {benefit}
                </label>
              ))}
            </div>
          </div>
          <div className="input-group">
            <label>Salary is negotiable</label>
            <input
              type="checkbox"
              name="isSalaryNegotiable"
              className="toggle-switch"
              checked={formData.isSalaryNegotiable}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Publish</label>
            <input
              type="checkbox"
              name="isPublished"
              className="toggle-switch"
              checked={formData.isPublished}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button
              className="create-job-button"
              type="submit"
              disabled={
                !(
                  formData.title &&
                  formData.content &&
                  formData.employmentType.length > 0 &&
                  formData.experience &&
                  formData.role &&
                  formData.skills &&
                  formData.schedule &&
                  formData.locations &&
                  formData.expired &&
                  formData.salary
                )
              }
            >
              Create job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
