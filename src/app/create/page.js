"use client";

import { useState } from "react";

export default function CreateProjectPage() {
  const [form, setForm] = useState({
    project_name: "",
    brief_description: "",
    website_link: "",
    client: "",
    industry: "",
    date: "",
    solutions_approach: "",
    tags: "",
    client_talk: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Upload images to Cloudinary
      const uploadedUrls = [];
      for (const file of images) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        uploadedUrls.push(data.url);
      }

      // 2. Save project in DB
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(",").map((t) => t.trim()),
          project_images: uploadedUrls,
        }),
      });

      if (res.ok) {
        alert("✅ Project created successfully!");
        setForm({
          project_name: "",
          brief_description: "",
          website_link: "",
          client: "",
          industry: "",
          date: "",
          solutions_approach: "",
          tags: "",
          client_talk: "",
        });
        setImages([]);
      } else {
        alert("❌ Failed to create project");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="project_name"
          placeholder="Project Name"
          value={form.project_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="brief_description"
          placeholder="Brief Description"
          value={form.brief_description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <input
          type="url"
          name="website_link"
          placeholder="Website Link"
          value={form.website_link}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="client"
          placeholder="Client"
          value={form.client}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={form.industry}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="solutions_approach"
          placeholder="Solutions & Approach"
          value={form.solutions_approach}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="client_talk"
          placeholder="Client Talk"
          value={form.client_talk}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full"
          accept="image/*"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}
