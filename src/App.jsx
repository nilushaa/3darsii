import React, { useState } from "react";

const colors = {
  primary: "bg-[#FF6F61]",   // yorqin qizil (background uchun)
  primaryHover: "hover:bg-[#e65b50]", // hover uchun
  secondary: "text-[#4A90E2]", // yorqin ko‘k
  accent: "text-[#F5A623]",    // to‘q sariq
  background: "bg-[#F0F4F8]", // engil kulrang fon
  text: "text-[#333]",
};

export default function App() {
  const [formData, setFormData] = useState({
    imageUrl: "",
    firstName: "",
    lastName: "",
    age: "",
    from: "",
    job: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `User created:\n${formData.firstName} ${formData.lastName}, Age: ${formData.age}, From: ${formData.from}, Job: ${formData.job}, Gender: ${formData.gender}\nImage URL: ${formData.imageUrl}`
    );
  };

  return (
    <div
      className={`${colors.background} min-h-screen font-sans ${colors.text} p-8`}
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <main>
        <section className="bg-white rounded-[15px] p-8 shadow-md mb-12 max-w-xl mx-auto">
          <h2 className={`${colors.accent} mb-4 text-2xl font-semibold`}>
            Create New User
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Image URL:
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter image URL"
                required
              />
            </label>

            <label className="block mb-2">
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter first name"
                required
              />
            </label>

            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter last name"
                required
              />
            </label>

            <label className="block mb-2">
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min={1}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter age"
                required
              />
            </label>

            <label className="block mb-2">
              From:
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter your location"
                required
              />
            </label>

            <label className="block mb-2">
              Job:
              <input
                type="text"
                name="job"
                value={formData.job}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300"
                placeholder="Enter job title"
                required
              />
            </label>

            <fieldset className="mb-4 border-0 p-0">
              <legend className="mb-2 font-semibold">Gender:</legend>
              <label className="mr-4 inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Male
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="ml-4 mr-1"
                />
                Female
              </label>
            </fieldset>

            <button
              type="submit"
              className={`${colors.primary} ${colors.primaryHover} text-white py-2 px-6 rounded-lg font-semibold text-lg cursor-pointer transition-colors duration-300`}
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className={`${colors.secondary} mt-16 text-center font-semibold`}>
        © 2025 CU-Theta. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  );
}
