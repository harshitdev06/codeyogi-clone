import React from "react";
import { Link } from "react-router-dom";
 
function PageNotFound (props){
    return (
      <div className="flex justify-center h-screen items-center ">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-extrabold text-indigo-600 ">404</h1>
            <div className="border-l border-gray-400  pl-4">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Page not found
              </h1>
              <h1 className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/lecture"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white font-bold">
              Go Back home
            </Link>
          </div>
        </div>
      </div>
    );
}
export default PageNotFound;