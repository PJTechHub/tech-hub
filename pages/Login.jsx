import Link from "next/link";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    setError("");
    console.log("Logged in with:", { email, password });
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-800">
      <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Welcome Back
        </h1>
        {error && (
          <p className="text-red-400 text-center text-sm mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUserAlt className="absolute top-3 left-4 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-4 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-12 py-3 text-gray-100 bg-transparent border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-4 text-blue-400 hover:text-blue-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link href="/Signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
