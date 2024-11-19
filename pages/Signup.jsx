import Link from "next/link";
import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Signed up with:", form);
    // Add sign-up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 to-purple-900">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Create Your Account
        </h1>
        {error && (
          <p className="text-red-400 text-center text-sm mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUserAlt className="absolute top-3 left-4 text-gray-500" />
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-4 text-gray-500" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email Address"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-4 text-gray-500" />
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-4 text-gray-500" />
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/Login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
