import React from "react";
import { useParams } from "react-router-dom";
import assignmentDetails from "./MockData/assignmentDetails";

function AssignmentDetailCard(props){

    const data = useParams()
    const selectedAssignment = +(data.id);
    const SelectedAssignmentObject =  assignmentDetails.find( a => a.id === selectedAssignment );
    return(

        <>
        <div className="h-screen bg-gray-50">
        <div className="pt-10 ">
            <div className="p-4 rounded-md bg-white">
                <div className="flex ">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 ">Assignment Details</h1>
                </div>
                <div className="mt-5">
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-y">
                        <h1 className=" text-gray-600 font-semibold text-sm"> Title</h1>
                        <div className="">
                         <h1>{SelectedAssignmentObject.title} </h1>
                        </div>
                    </div>
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-b">
                        <h1 className="text-gray-600 font-semibold text-sm">Due Date</h1>
                        <h1>{SelectedAssignmentObject.dueDate} </h1>
                    </div>
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-b">
                        <h1 className="text-gray-600 font-semibold text-sm">Description</h1>
                        <div className="flex flex-col h-full w-full">
                        <h1>{SelectedAssignmentObject.Description}</h1>
                        <img src={SelectedAssignmentObject.imgLink} alt="" />
                        </div>
                    </div>
                    <div className="py-5 space-x-4 flex items-center">
                        <a href="" className="px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-800 rounded-md inline-block m-1"> Re-Submit</a>
                        <a href="" className="text-blue-500   "> See your Submission</a>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
       </div> 
        </>
    );
}
export default AssignmentDetailCard;