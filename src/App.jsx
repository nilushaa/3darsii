import React, { useState } from "react";

const colors = {
  primary: "bg-[#FF6F61]",
  primaryHover: "hover:bg-[#e65b50]",
  secondary: "text-[#4A90E2]",
  accent: "text-[#F5A623]",
  background: "bg-[#F0F4F8]",
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

  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, formData]); 
    handleClear(); 
  };

  const handleClear = () => {
    setFormData({
      imageUrl: "",
      firstName: "",
      lastName: "",
      age: "",
      from: "",
      job: "",
      gender: "Male",
    });
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
              />
            </label>

            <label className="block mb-2">
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 rounded-md border border-gray-300 appearance-none"
                placeholder="Enter age"
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

            <div className="flex justify-between">
              <button
                type="submit"
                className={`${colors.primary} ${colors.primaryHover} text-white py-2 px-6 rounded-lg font-semibold text-lg cursor-pointer transition-colors duration-300`}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Clear
              </button>
            </div>
          </form>
        </section>
        {users.length > 0 && (
          <section className="bg-white rounded-[15px] p-6 shadow-md max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              Added Users:
            </h3>
            <ul className="space-y-4">
              {users.map((user, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-md bg-gray-50 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    {user.imageUrl && (
                      <img
                        src={user.imageUrl}
                        alt={`${user.firstName}`}
                        className="w-16 h-16 object-cover rounded-full border"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-lg">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-600">
                        Age: {user.age} | From: {user.from}
                      </p>
                      <p className="text-sm text-gray-600">
                        Job: {user.job} | Gender: {user.gender}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className={`${colors.secondary} mt-16 text-center font-semibold`}>
        © 2025 CU-Theta. xuquqlar himoyalangan.
      </footer>
    </div>
  );
}
