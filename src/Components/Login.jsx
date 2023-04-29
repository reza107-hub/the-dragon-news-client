import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  const { signIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    signIn(email, password)
      .then((r) => {
        console.log(r.user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  const handleLogInGoogle = () => {
    logInWithGoogle()
      .then((r) => {
        console.log(r.user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  const handleLogInGithub = () => {
    logInWithGithub()
      .then((r) => {
        console.log(r.user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#403F3F]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogIn}
            className="space-y-6"
            action="#"
            method="POST"
          >
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#403F3F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-red-500 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold mb-5">Login with</p>
            <button
              onClick={handleLogInGoogle}
              className="btn flex normal-case border border-[#5c6ac4] text-[#5c6ac4] mb-3"
            >
              <FaGoogle className="mr-2"></FaGoogle>
              Login with Google
            </button>
            <button
              onClick={handleLogInGithub}
              className="btn  flex normal-case border border-black"
            >
              <FaGithub className="mr-2"></FaGithub>
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
