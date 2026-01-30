"use client";

import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("owner");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  const features = [
    {
      icon: "👥",
      title: "Multi-Role Support",
      description: "Sign up as an owner, manager, tenant, investor, or banker",
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "Bank-level security with encrypted data protection",
    },
    {
      icon: "⚡",
      title: "Quick Setup",
      description: "Get up and running in minutes with our simple onboarding",
    },
  ];

  const roles = [
    { id: "owner", label: "Owner/Manage" },
    // { id: 'manager', label: 'Manager' },
    { id: "tenant", label: "Tenant" },
    { id: "investor", label: "Investor" },
    { id: "banker", label: "Banker" },
  ];

  return (
    <AuthLayout
      title="Get Started with SVRA Properties"
      subtitle="Choose your role and create an account to start managing your properties efficiently."
      features={features}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create Account
        </h2>
        <p className="text-gray-600 mb-8">Select your role to get started</p>

        <form className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRole(role.id)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    selectedRole === role.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {role.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="John"
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="john@example.com"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Company Name (Optional) */}

          {selectedRole !== 'tenant' && 
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>Company Name</span>
              <span className="text-gray-500 text-sm ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <FiBuilding className="h-5 w-5 text-gray-400" /> */}
              </div>
              <input
                type="text"
                placeholder="Your Company"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          }

          {selectedRole === "owner" && (
            <div className="flex items-start">
              <button
                type="button"
                onClick={() => setCheckbox(!checkbox)}
                className="relative inline-flex items-start mt-1"
              >
                <div
                  className={`w-5 h-5 border rounded flex p-1 items-center justify-center transition-colors ${
                    checkbox ? "bg-blue-600 border-blue-600" : "border-gray-300"
                  }`}
                >
                  {checkbox && <FiCheck className="w-3 h-3 text-white" />}
                </div>
              </button>
              <span className="ml-2 text-sm text-gray-700 p-1">
                Are your owner of the Property?
                {/* <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </Link> */}
              </span>
            </div>
          )}

          {/* Password Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                At least 8 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setAgreeToTerms(!agreeToTerms)}
              className="relative inline-flex items-start mt-1"
            >
              <div
                className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                  agreeToTerms
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                {agreeToTerms && <FiCheck className="w-3 h-3 text-white" />}
              </div>
            </button>
            <span className="ml-2 text-sm text-gray-700 p-1">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-blue-600 hover:text-blue-700"
              >
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* Create Account Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Create Account
          </motion.button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in here
            </Link>
          </p>
        </form>
      </motion.div>
    </AuthLayout>
  );
}
