import React from "react";
import {Link} from "react-router-dom";
function QuizHeader(props) {
    return (
     <div className="bg-gray-800 flex items-center justify-between sm:px-20 px-2 ">
        <div className=" space-x-4 py-4">
          <Link to="/lecture">
            <span className="font-semibold text-white">CodeYogi</span>          
          </Link>        
          <span className="text-xl text-white">|</span>  
          <span className="text-white">Welcome, Harshit</span> 
        </div> 
        <div className="flex space-x-2">
          <div className="flex bg-blue-600 items-center px-4 py-3"> 
            <img src="https://img.icons8.com/material-outlined/24/ffffff/clock--v1.png" />
            <span className="text-white">00:00</span>          
          </div>
          <div className="flex bg-blue-600 items-center px-4 py-3"> 
            <img src="https://img.icons8.com/material-outlined/24/ffffff/exit.png" />
            <span className="text-white">Log-out</span>          
          </div>               
        </div>      
      </div>
     );
}
export default QuizHeader;