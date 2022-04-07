import React from "react";
import { Link } from "react-router-dom";
 
function AssignmentCard({assignment}){
 
    const publishingDate = assignment["created_at"];
    const splitedPublishingDate = publishingDate.split("T");

    const dueDate =assignment["due_date"];
    const splitedDueDate = dueDate.split("T");

    
    return(
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
        <div>
            <Link to={`${assignment.id}/assignmentdetail`}>
            <div className="p-3">
                <div >
                    <h1 className="flex font-medium text-gray-900" > # {assignment.id}
                     <span className="ml-2">{assignment.title}</span> 
                     <span className="ml-2 text-gray-500 ">({splitedPublishingDate[0]})</span>
                     </h1>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-red-500">Due Date : {splitedDueDate[0]}</h1>

                    </div>
                    <div >
                        <h1 className=" py-2 font-medium text-green-600">{}</h1>
                    </div>
                </div>
            </div>
            </Link>
            <div className="flex ">
                <div  className=" flex flex-1">
                  <button  href="" className=" text-green-600 hover:text-green-700 font-semibold text-medium   h-full w-full py-4 flex justify-center items-center "> 
                  <img className="mr-2" src="https://img.iconsprop8.com/external-free-is-layf-royyan-wijaya/24/26e07f/external-check-revamp-3-free-is-layf-royyan-wijaya-5.png"/>  
                    Re-Submit</button>
                </div>
                <div className=" flex flex-1  border-l">
                  <a href={""} className="h-full w-full underline text-blue-600 hover:text-blue-700 font-semibold text-medium py-4 flex justify-center items-center">
                    <img className="mr-2" src="https://img.icons8.com/material-rounded/24/000000/link--v1.png"/>
                    See your Submission</a>
                </div>
            </div>
            
            
        </div>
    </li>
    );
}
export default AssignmentCard