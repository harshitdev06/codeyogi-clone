import React from "react";
import { Link } from "react-router-dom";

function AssignmentCard(props){
    return(
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
        <div>
            <Link to=":id/assignmentdetail">
            <div className="p-3">
                <div >
                    <h1 className="flex space-x-2">{props.assignmentNumber} <span>{props.assignmentName}</span> <span>{props.date}</span></h1>
                </div>
                <div className="flex justify-between items-center my-2">
                    <div className="flex flex-col space-y-1">
                        <h1>Due Date : {props.duedate}</h1>
                        <h1>({props.warning})</h1>
                    </div>
                    <div >
                        <h1 className="px-2 py-4">{props.submitStatus}</h1>
                    </div>
                </div>
            </div>
            </Link>
            <div className="flex ">
                <div  className=" flex flex-1">
                  <a href="" className=" text-green-600 hover:text-green-700 font-semibold text-medium   h-full w-full py-4 flex justify-center items-center "> 
                  <img className="mr-2" src="https://img.icons8.com/external-free-is-layf-royyan-wijaya/24/26e07f/external-check-revamp-3-free-is-layf-royyan-wijaya-5.png"/>                  Re-Submit</a>
                </div>
                <div className=" flex flex-1  border-l">
                  <a href="" className="h-full w-full underline text-blue-600 hover:text-blue-700 font-semibold text-medium py-4 flex justify-center items-center">
                    <img className="mr-2" src="https://img.icons8.com/material-rounded/24/000000/link--v1.png"/>
                       See your Submission</a>
                </div>
            </div>
        </div>
    </li>
    );
}
export default AssignmentCard