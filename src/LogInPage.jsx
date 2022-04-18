import React from "react"
import { Link } from "react-router-dom";
function LogInPage(props){
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-y-10">
        <div className="w-full max-w-md space-y-8">
          <Link to="/lecture">
            <h1 className="text-4xl font-extrabold text-center">CodeYogi</h1>
          </Link>
          <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div>
          <a
            href=""
            className="flex px-12 py-6 items-center text-white rounded-xl bg-indigo-600">
            <img
              className="mr-10"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"
            />
            Sign in with Discord
          </a>
        </div>
      </div>
    </div>
  );
}
export default LogInPage;