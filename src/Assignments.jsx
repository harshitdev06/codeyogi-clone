import React from "react";
import AssignmentCard from "./AssignmentCard";
import assignment from "./MockData/Assignment";
import axios from "axios";
import Loader from "./Loader";
function Assignments() {

    const [ reSubmissionPopUp, setReSubmissionPopUp ] = React.useState(false); 
    const [spinner,setSpinner] = React.useState(true);
    let[assignment , setAssignment] = React.useState([])

    const toggleReSubmisionPopUp =()=>{
       setReSubmissionPopUp(!reSubmissionPopUp);
    }

     React.useEffect(()=>{
        const promise = axios.get("https://api.codeyogi.io/batches/1/assignments", { withCredentials: true});
        promise.then( (reponse)=>{
        setAssignment(reponse.data)
        setSpinner(false);
    })
    },[])
    

  return (
  <div className={ reSubmissionPopUp && "  " }> 
    <div className="pt-10">
      {
        spinner && <Loader />
      }
      <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className= {" space-y-2 "}>
        {
          !spinner && assignment.map( (t) => {return (<AssignmentCard assignment={t} />)})
        }
        </ul>
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
      </div>
     </div> 
  
  );
}

export default Assignments;
