import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { data, useNavigate } from "react-router-dom";
import { AppContent } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const AuthForm = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ONSUBMIT HANDLER
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
  <>
    {/* Heading */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight">
        {state === "Sign Up" ? "Create your account" : "Welcome back"}
      </h2>

      <p className="text-sm text-gray-400 mt-2">
        {state === "Sign Up"
          ? "Start building your YouTube control system."
          : "Log in to manage your content machine."}
      </p>
    </div>

    {/* Form */}
    <form onSubmit={onSubmitHandler} className="space-y-6">

      {/* Name */}
      {state === "Sign Up" && (
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 
                       bg-[#0f0f12] 
                       border border-[#2a2a2a] 
                       rounded-lg 
                       text-white
                       focus:outline-none 
                       focus:border-[#db0000]
                       focus:ring-1 
                       focus:ring-[#db0000]
                       transition-all duration-200"
          />
        </div>
      )}

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 
                     bg-[#0f0f12] 
                     border border-[#2a2a2a] 
                     rounded-lg 
                     text-white
                     focus:outline-none 
                     focus:border-[#db0000]
                     focus:ring-1 
                     focus:ring-[#db0000]
                     transition-all duration-200"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 
                     bg-[#0f0f12] 
                     border border-[#2a2a2a] 
                     rounded-lg 
                     text-white
                     focus:outline-none 
                     focus:border-[#db0000]
                     focus:ring-1 
                     focus:ring-[#db0000]
                     transition-all duration-200"
        />
      </div>

      {/* Forgot */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate("/reset-password")}
          className="text-sm text-gray-500 hover:text-[#db0000] transition"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg 
                   bg-[#db0000] 
                   hover:bg-[#b80000] 
                   active:scale-[0.98] 
                   transition-all duration-200 
                   font-medium 
                   shadow-[0_0_20px_rgba(219,0,0,0.25)]"
      >
        {state === "Sign Up" ? "Create Account" : "Login"}
      </button>
    </form>

    {/* Divider */}
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-[#2a2a2a]" />
      <span className="text-xs text-gray-600">OR</span>
      <div className="flex-1 h-px bg-[#2a2a2a]" />
    </div>

    {/* Switch */}
    <p className="text-sm text-center text-gray-400">
      {state === "Sign Up" ? (
        <>
          Already have an account?{" "}
          <span
            onClick={() => setState("Login")}
            className="text-[#db0000] cursor-pointer hover:underline"
          >
            Login
          </span>
        </>
      ) : (
        <>
          Don’t have an account?{" "}
          <span
            onClick={() => setState("Sign Up")}
            className="text-[#db0000] cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </>
      )}
    </p>
  </>
);
};

export default AuthForm;
