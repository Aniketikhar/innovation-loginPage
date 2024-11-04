import React from "react";
import logo from "/Logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div id="loginBody">
      <div id="login" className="min-h-screen flex flex-col">
        <header className="w-full p-4 flex justify-between items-center">
          <div className="w-18 h-18 relative">
            <img src={logo} alt="Logo" fill className="object-contain logo" />
          </div>
          <button className="relative px-8 py-1 ms-6 mb-6 text-white text-sm rounded-full bg-[#0A0B1A] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,170,50,0.3)] shadow-[0_0_15px_rgba(255,170,50,0.2)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent">
            Sign Up
          </button>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Manage Your Data More Efficiently &{" "}
              <span className="block text-orange-500">
                Effectively Than Ever Before!
              </span>
            </h1>
          </div>
          <div className=" card rounded-3xl border-4  w-full max-w-md bg-slate-900/60 backdrop-blur border-slate-800">
            <div>
              <div className="text-3xl text-center m-6 font-semibold text-orange-500">
                Login
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="space-y-2 flex justify-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-[90%] px-4 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
                <div className="space-y-2 flex justify-center">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-[90%] px-4 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
                <div className="flex justify-end mt-0">
                  <a
                    href="#"
                    className="text-sm text-white me-6 hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="flex justify-center ">
                  <button className="relative px-8 py-1 mb-6 text-white text-sm font-medium bg-[#0A0B1A] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,170,50,0.3)] shadow-[0_0_15px_rgba(255,170,50,0.2)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent">
                    Login
                  </button>
                  <button className="relative px-8 py-1 ms-6 mb-6 text-white text-sm rounded-full bg-[#0A0B1A] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,170,50,0.3)] shadow-[0_0_15px_rgba(255,170,50,0.2)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            <span className="text-slate-400">You don't have an account? </span>
            <button href="#" className="text-orange-500 hover:text-orange-400">
              Sign up
            </button>
          </div>
          <footer className="mt-12 text-white text-xl font-medium">
            Innovation Hacks AI
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Login;
