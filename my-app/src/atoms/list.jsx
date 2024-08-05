import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./list.scss";

const fetchJobs = async () => {
  try {
    const response = await fetch("http://localhost:3001/jobs");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Fetching jobs failed:", error);
    throw error;
  }
};

const List = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  const deleteJob = (id) => {
    console.log("Deleting job with id:", id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs!</p>;

  return (
    <div className="list-container">
      <div className="header">
        <h1>List</h1>
        <nav className="breadcrumb">
          <span>Dashboard</span> * <span>Job</span> * <span>List</span>
        </nav>
        <button
          className="new-job-button"
          onClick={() => (window.location.href = "/job/create")}
        >
          + New job
        </button>
      </div>
      <div className="search-sort">
        <input type="text" placeholder="Search..." className="search-input" />
        <div className="filters">Filters</div>
        <div className="sort">Sort by: Latest</div>
      </div>
      <div className="job-cards">
        {data.map((job) => (
          <div key={job.id} className="job-card">
            <img
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
              alt={job.title}
              className="company-logo"
            />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>Posted date: {job.postedDate}</p>
              <p>{job.candidates} candidates</p>
              <p>
                {job.experience} | {job.employmentType}
              </p>
              <p>
                {job.salary} | {job.postedBy}
              </p>
            </div>
            <div className="options">
              <button>...</button>
              <div className="dropdown">
                <p onClick={() => openModal(job)}>
                  <FaEye style={{ marginRight: "10px" }} /> View
                </p>
                <p>
                  <FaEdit style={{ marginRight: "10px" }} /> Edit
                </p>
                <p
                  style={{ color: "#e74c3c" }}
                  onClick={() => deleteJob(job.id)}
                >
                  <FaTrashAlt style={{ marginRight: "10px" }} /> Delete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="job-cards">
        {data.map((job) => (
          <div key={job.id} className="job-card">
            <img
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
              alt={job.title}
              className="company-logo"
            />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>Posted date: {job.postedDate}</p>
              <p>{job.candidates} candidates</p>
              <p>
                {job.experience} | {job.employmentType}
              </p>
              <p>
                {job.salary} | {job.postedBy}
              </p>
            </div>
            <div className="options">
              <button>...</button>
              <div className="dropdown">
                <p onClick={() => openModal(job)}>
                  <FaEye style={{ marginRight: "10px" }} /> View
                </p>
                <p>
                  <FaEdit style={{ marginRight: "10px" }} /> Edit
                </p>
                <p
                  style={{ color: "#e74c3c" }}
                  onClick={() => deleteJob(job.id)}
                >
                  <FaTrashAlt style={{ marginRight: "10px" }} /> Delete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="job-cards">
        {data.map((job) => (
          <div key={job.id} className="job-card">
            <img
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
              alt={job.title}
              className="company-logo"
            />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>Posted date: {job.postedDate}</p>
              <p>{job.candidates} candidates</p>
              <p>
                {job.experience} | {job.employmentType}
              </p>
              <p>
                {job.salary} | {job.postedBy}
              </p>
            </div>
            <div className="options">
              <button>...</button>
              <div className="dropdown">
                <p onClick={() => openModal(job)}>
                  <FaEye style={{ marginRight: "10px" }} /> View
                </p>
                <p>
                  <FaEdit style={{ marginRight: "10px" }} /> Edit
                </p>
                <p
                  style={{ color: "#e74c3c" }}
                  onClick={() => deleteJob(job.id)}
                >
                  <FaTrashAlt style={{ marginRight: "10px" }} /> Delete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="job-cards">
        {data.map((job) => (
          <div key={job.id} className="job-card">
            <img
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/company/company-1.webp"
              alt={job.title}
              className="company-logo"
            />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>Posted date: {job.postedDate}</p>
              <p>{job.candidates} candidates</p>
              <p>
                {job.experience} | {job.employmentType}
              </p>
              <p>
                {job.salary} | {job.postedBy}
              </p>
            </div>
            <div className="options">
              <button>...</button>
              <div className="dropdown">
                <p onClick={() => openModal(job)}>
                  <FaEye style={{ marginRight: "10px" }} /> View
                </p>
                <p>
                  <FaEdit style={{ marginRight: "10px" }} /> Edit
                </p>
                <p
                  style={{ color: "#e74c3c" }}
                  onClick={() => deleteJob(job.id)}
                >
                  <FaTrashAlt style={{ marginRight: "10px" }} /> Delete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedJob && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedJob.title}</h2>
            <p>Posted date: {selectedJob.postedDate}</p>
            <p>{selectedJob.candidates} candidates</p>
            <p>
              {selectedJob.experience} | {selectedJob.employmentType}
            </p>
            <p>
              {selectedJob.salary} | {selectedJob.postedBy}
            </p>
            <p>{selectedJob.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
