import React from "react";
import AssignmentCard from "./AssignmentCard";
import assignment from "./MockData/Assignment";

function Assignments() {

    const [ reSubmissionPopUp, setReSubmissionPopUp ] = React.useState(false); 

    const toggleReSubmisionPopUp =()=>{
       setReSubmissionPopUp(!reSubmissionPopUp);
    }

  return (
  <div className={ reSubmissionPopUp && "" }> 
    <div className="pt-10">
      <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className="space-y-2">
        {
          assignment.map( (t) => {return (<AssignmentCard 
            id={t.id} 
            reSubmissionPopUp={reSubmissionPopUp}
            toggleReSubmisionPopUp={toggleReSubmisionPopUp}
            assignmentName={t.assignmentName} 
            date={t.publishingDate}
            duedate={t.dueDate} 
            submitStatus={t.submittedStatus} 
            submittedLink={t.submittedLink} />)})
        }
        </ul>
        </div>
      </div>
     </div> 
  
  );
}

export default Assignments;
