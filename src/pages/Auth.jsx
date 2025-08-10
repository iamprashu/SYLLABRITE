import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app/dashboard");
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 text-center px-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-white font-bold text-5xl font-sans mb-2">
              SyllaBrite
            </h1>
            <p className="text-white text-lg opacity-90 mb-6">
              AI-Powered Study Companion
            </p>
          </div>
          <div className="space-y-4 text-white text-left max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Smart schedule generation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Adaptive learning with AI</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Progress tracking & analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Collaborative study rooms</span>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
      </div>

      <div className="flex w-1/2 justify-center items-center bg-gray-50">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-800 font-bold text-3xl mb-2">
              Welcome to SyllaBrite
            </h2>
            <p className="text-gray-600">
              Transform your study routine with AI
            </p>
          </div>

          <div className="space-y-4">
            <SignInButton
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg"
              mode="modal"
              afterSignInUrl="/app/dashboard"
            >
              Login
            </SignInButton>

            <SignUpButton
              className="w-full bg-white hover:bg-gray-50 text-emerald-600 font-semibold py-3 px-6 rounded-xl border-2 border-emerald-600 transition-colors duration-200"
              mode="modal"
              afterSignUpUrl="/app/dashboard"
            >
              Sign Up
            </SignUpButton>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
