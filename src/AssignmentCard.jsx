import React from "react";
import { Link } from "react-router-dom";
 
function AssignmentCard({assignment }){
 
    const publishingDate = assignment["created_at"];
    const splitedPublishingDate = publishingDate.split("T");
    const [ reSubmissionPopUp, setReSubmissionPopUp ] = React.useState(false); 

    const dueDate =assignment["due_date"];
    const splitedDueDate = dueDate.split("T");

    const toggleReSubmisionPopUp =()=>{
       setReSubmissionPopUp(!reSubmissionPopUp);
    }
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
                  <button  onClick={toggleReSubmisionPopUp} className=" text-green-600 hover:text-green-700 font-semibold text-medium   h-full w-full py-4 flex justify-center items-center "> 
                  <img className="mr-2" src="https://img.icons8.com/windows/32/26e07f/--checkmark-yes.png"/>  
                    Re-Submit</button>
                </div>
                <div className=" flex flex-1  border-l">
                  <a href={""} className="h-full w-full underline text-blue-600 hover:text-blue-700 font-semibold text-medium py-4 flex justify-center items-center">
                    <img className="mr-2" src="https://img.icons8.com/material-rounded/24/4a90e2/external-link.png"/>
                    See your Submission</a>
                </div>
            </div>
            { (reSubmissionPopUp) &&
            <div className="h-screen fixed top-0 left-0 w-screen flex justify-center items-center z-10">        
              <button onClick={toggleReSubmisionPopUp} className="fixed mr-4 mt-4 top-0 right-0">
                 <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-9.png"/>
              </button>
              <div className="bg-white px-4 py-8 space-y-4 drop-shadow-xl rounded-md z-10">
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