import React from "react";
import { Link } from "react-router-dom";
import assignment from "./MockData/Assignment";
import { useParams } from "react-router-dom";
 
function AssignmentCard(props){


    
    return(
    <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
        <div>
            <Link to={`${props.id}/assignmentdetail`}>
            <div className="p-3">
                <div >
                    <h1 className="flex font-medium text-gray-900" > # {props.id}
                     <span className="ml-2">{props.assignmentName}</span> 
                     <span className="ml-2 text-gray-500 ">({props.date})</span>
                     </h1>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-red-500">Due Date : {props.duedate}</h1>

                    </div>
                    <div >
                        <h1 className=" py-2 font-medium text-green-600">{props.submitStatus}</h1>
                    </div>
                </div>
            </div>
            </Link>
            <div className="flex ">
                <div  className=" flex flex-1">
                  <button onClick={props.toggleReSubmisionPopUp} href="" className=" text-green-600 hover:text-green-700 font-semibold text-medium   h-full w-full py-4 flex justify-center items-center "> 
                  <img className="mr-2" src="https://img.icons8.com/external-free-is-layf-royyan-wijaya/24/26e07f/external-check-revamp-3-free-is-layf-royyan-wijaya-5.png"/>  
                    Re-Submit</button>
                </div>
                <div className=" flex flex-1  border-l">
                  <a href={props.submittedLink} className="h-full w-full underline text-blue-600 hover:text-blue-700 font-semibold text-medium py-4 flex justify-center items-center">
                    <img className="mr-2" src="https://img.icons8.com/material-rounded/24/000000/link--v1.png"/>
                    See your Submission</a>
                </div>
            </div>
            
            { (props.reSubmissionPopUp) &&
                <div className="h-screen fixed top-0 left-0 w-screen flex justify-center items-center z-10">
                    
                    <button onClick={props.toggleReSubmisionPopUp} className="fixed mr-4 mt-4 top-0 right-0">
                        <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-9.png"/>
                    </button>
                    <div className="bg-white px-4 py-8 space-y-4 border border-gray-300 drop-shadow-xl rounded-md">
                        <div className="border-y py-4 flex px-2 space-x-48 items-center justify-between">
                            <h1 className="text-sm font-medium text-gray-400"> Submission link </h1>
                            <input placeholder="Subimssion link" className="grow rounded border bg-gray-100 p-1" type="text" />
                        </div>
                        <button className="px-8 rounded py-2 bg-indigo-600 text-white font-medium inline-block ">Submit</button>
                    </div>
                </div>
            }
        </div>
    </li>
    );
}
export default AssignmentCard