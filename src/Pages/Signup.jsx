import React from 'react'
import Login1 from "../assets/images/background2.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center gap-20 px-4 md:px-8 lg:px-20">
    <div className="flex-shrink-0 h-auto w-auto">
      <img
        src={Login1}
        alt="Login Illustration"
        className="object-contain h-full w-full max-w-md"
      />
    </div>

    <div className="flex flex-col justify-center items-start p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
      <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
      <p className="text-gray-500 mb-8">
        Get started with our platform today.
      </p>
      <form className="space-y-4 w-full">
      <div>
          <label
            className="block text-sm font-medium text-gray-500 mb-1"
            htmlFor="email"
          >
            Name
          </label>
          <input
            className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
            id="name"
            placeholder="Pawan Bhandari"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-500 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
            id="email"
            placeholder="example@email.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="flex justify-between">
            <label
              className="block text-sm font-medium text-gray-500 mb-1"
              htmlFor="password"
            >
              Password
            </label>
          </div>

          <input
            className="bg-gray-100 border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md px-3 py-2 text-sm"
            id="password"
            placeholder="••••••••"
            required
            type="password"
          />
        </div>
        <button
          className="w-full bg-purple-500 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="text-center text-sm text-gray-500 flex justify-between py-3">
        Already have an account?
        <Link to = '/login'
          className="ml-2 font-medium text-gray-900 underline underline-offset-2 "
          href="#"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Signup