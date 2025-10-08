import logo from '../assets/TimeWISE logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://timewise-login-system-backend.onrender.com/api/login`, {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token); //for saving jwt
      alert("✅ Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "❌ Login failed");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 px-4">
      {/* Glass Card */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl p-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Optional logo slot */}
          <img src={logo} alt="Logo" className="mx-auto h-12 mb-4" />
          <h1 className="text-3xl font-extrabold text-blue-900 drop-shadow-sm">
            TimeWise
          </h1>
          <p className="text-sm text-blue-100 mt-2">
            Smart Attendance & Productivity Tracker
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-blue-900 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-blue-200
                         text-gray-900 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
                         value={username}
            onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-blue-900 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-blue-200
                         text-gray-900 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
                         value={password}
            onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 
                       hover:from-blue-600 hover:to-blue-700 
                       text-white font-semibold transition transform hover:-translate-y-1 shadow-lg cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Forgot password */}
        <p className="text-center text-sm text-blue-100 mt-6">
          Forgot password?{" "}
          <a href="#" className="text-blue-200 font-medium hover:underline">
            Reset
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
