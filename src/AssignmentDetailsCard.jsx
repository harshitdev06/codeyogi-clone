import React from "react";
import MDEditor from '@uiw/react-md-editor';
import SubmmissionCard from "./SubmmistionCard";

function AssignmentDetailsCard({assignment}) {

    const [ reSubmissionPopUp, setReSubmissionPopUp ] = React.useState(false); 
    const toggleReSubmisionPopUp =()=>{
        setReSubmissionPopUp(!reSubmissionPopUp);
    }
    return(
         <>
        <div className="bg-gray-50">
        <div className="pt-10 ">
            <div className="p-4 rounded-md bg-white">
                <div className="flex ">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 ">Assignment Details</h1>
                </div>
                <div className="mt-5">
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-y">
                        <h1 className=" text-gray-600 font-semibold text-sm"> Title</h1>
                        <div className="">
                         <h1>{assignment.title} </h1>
                        </div>
                    </div>
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-b">
                        <h1 className="text-gray-600 font-semibold text-sm">Due Date</h1>
                        <h1>{assignment.dueDate} </h1>
                    </div>
                    <div className="items-center py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 border-b">
                        <dt className="text-gray-600 font-semibold text-sm">Description</dt>
                        <dd className="flex flex-col h-full w-full col-span-2">
                        <h1>{<MDEditor.Markdown className="!bg-white !text-black" source={assignment.description} />}</h1>
                        </dd>
                    </div>
                    <div className="py-5 space-x-4 flex items-center">
                        <button onClick={toggleReSubmisionPopUp} className="px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-800 rounded-md inline-block m-1"> Re-Submit</button>
                        <a href="" className="text-blue-500   "> See your Submission</a>
                    </div>
                    <div></div>
                </div>
            </div>
            { (reSubmissionPopUp) &&
               <SubmmissionCard assignment_id={assignment.id} toggleReSubmisionPopUp={toggleReSubmisionPopUp} />
            }
         </div>
       </div> 
         </>
    );
}
export default AssignmentDetailsCard;