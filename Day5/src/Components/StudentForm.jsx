import { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    batch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Student Form</h1>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter your city"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Batch</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter your batch"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
