"use client";

import { useState } from "react";

const openings = [
  { title: "Security Guard" },
  { title: "Supervisor" },
  { title: "Female Security Officer" },
  { title: "Dog Handler" },
  { title: "Fire Safety Officer" },
  { title: "HR Executive" },
  { title: "Business Development Executive" },
  { title: "Operations Manager" },
];

export default function CareerForm() {
  const [fileName, setFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    applyFor: "",
    address: "",
    city: "",
    message: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, resume: fileName });
    alert("Application submitted successfully! We'll get back to you soon.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      applyFor: "",
      address: "",
      city: "",
      message: "",
    });
    setFileName("No file chosen");
    // Reset file input
    const fileInput = document.getElementById("resume");
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-black uppercase red-line mb-3">Career</h1>
        <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
          Join JSS Group Security & Facility Management Pvt. Ltd. and be part of India&apos;s fastest growing security company. 
          We offer exciting career opportunities across India with competitive salary and growth prospects.
        </p>
      </div>

      {/* Application Form - Google Form Style */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-3 mb-6">
          SEND YOUR DETAILS
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* First Row - First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                placeholder="Your last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone No. */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              placeholder="+91 98765 43210"
              required
            />
          </div>

          {/* Apply For - Dropdown with all jobs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apply For / Service For <span className="text-red-500">*</span>
            </label>
            <select
              name="applyFor"
              value={formData.applyFor}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-white"
              required
            >
              <option value="" disabled>— Select a position —</option>
              {openings.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title} — {job.location}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-400 mt-1">Select the role you're applying for</p>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              placeholder="Street, area, landmark"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              placeholder="Your city"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition resize-none"
              placeholder="Tell us about your experience, qualifications, or any additional information..."
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume/CV <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                id="resume"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => document.getElementById('resume')?.click()}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Choose file
              </button>
              <span className="text-sm text-gray-400">{fileName}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm transition shadow-md hover:shadow-lg cursor-pointer"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

      {/* Note */}
      <p className="text-center text-xs text-gray-400 mt-6">
        We'll review your application and get back to you within 5-7 working days.
      </p>
    </div>
  );
}