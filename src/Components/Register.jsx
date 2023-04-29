import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Register() {
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateProf } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    if (!/(?=.*[A-Z])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least one uppercase!",
      });
    } else if (!/(?=.*[0-9])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least one numbers!",
      });
    } else if (password.length < 8) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least 8 characters in your password!",
      });
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add a special character!",
      });
    }
    createUser(email, password)
      .then((r) => {
        // r.user.displayName = name;
        // r.user.photoURL = photo;
        updateProf(name, photo);
        console.log(r.user);
      })
      .catch((e) => console.log(e));
  };

  const handleTerms = (e) => {
    setAccepted(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <>
      <Navbar></Navbar>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#403F3F]">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleCreateUser}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo url
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  autoComplete="photo"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="font-thin text-xs flex gap-3">
              <input
                onClick={handleTerms}
                type="checkbox"
                name="accept"
                id=""
              />{" "}
              Accept The Term and Conditions
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-[#403F3F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                  accepted ? "hover:bg-indigo-500" : ""
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                disabled={!accepted}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-red-500 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
