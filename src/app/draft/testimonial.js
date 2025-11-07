// "use client";

// import { useState } from "react";

// export default function CreateTestimonialPage() {
//   const [form, setForm] = useState({
//     client_name: "",
//     client_title: "",
//     testiomony: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/testimonial", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         alert("✅ Testimonial created successfully!");
//         setForm({ client_name: "", client_title: "", testiomony: "" });
//       } else {
//         const data = await res.json();
//         alert(`❌ Failed: ${data.message || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       alert("❌ An error occurred while creating testimonial");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Create Testimonial</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="client_name"
//           placeholder="Client Name"
//           value={form.client_name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="text"
//           name="client_title"
//           placeholder="Client Title"
//           value={form.client_title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <textarea
//           name="testiomony"
//           placeholder="Client Testimony"
//           value={form.testiomony}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="4"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//         >
//           {loading ? "Saving..." : "Create Testimonial"}
//         </button>
//       </form>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";

// export default function CreateTestimonialPage() {
//   const [form, setForm] = useState({
//     client_name: "",
//     client_title: "",
//     testiomony: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/testimonial", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         alert("✅ Testimonial created successfully!");
//         setForm({ client_name: "", client_title: "", testiomony: "" });
//       } else {
//         const data = await res.json();
//         alert(`❌ Failed: ${data.message || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       alert("❌ An error occurred while creating testimonial");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Create Testimonial</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="client_name"
//           placeholder="Client Name"
//           value={form.client_name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="text"
//           name="client_title"
//           placeholder="Client Title"
//           value={form.client_title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <textarea
//           name="testiomony"
//           placeholder="Client Testimony"
//           value={form.testiomony}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="4"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//         >
//           {loading ? "Saving..." : "Create Testimonial"}
//         </button>
//       </form>
//     </div>
//   );
// }
