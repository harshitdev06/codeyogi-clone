import React from "react";
import AssignmentCard from "./AssignmentCard";
import axios from "axios";
import Loader from "./Loader";
import NotificationPopUP from "./NotificationPopUp";

function Assignments() {


    const [spinner,setSpinner] = React.useState(true);
    const [assignment , setAssignment] = React.useState([])
    const [notificationPopupText , setNotificationPopUPText]= React.useState("")

    React.useEffect(()=>{
        const promise = axios.get("https://api.codeyogi.io/batches/1/assignments", { withCredentials: true});
        promise.then( (reponse)=>{
        setAssignment(reponse.data)
        setSpinner(false);
    })
    },[])

    console.log(notificationPopupText);
  return (
  <div className={"  " }> 
    <div className="pt-10">
      {
        spinner && <Loader />
      }
      <h1 className="mb-5 text-xl font-semibold">Assignment list </h1>
    </div>
    <div className="fixed flex justify-center items-center top-10">
       { notificationPopupText && <NotificationPopUP notification={notificationPopupText } />      }   
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className= {" space-y-2 "}>
        {
          !spinner && assignment.map( (t) => {return (
            <AssignmentCard setNotificationPopUPText={setNotificationPopUPText} key={t.id} assignment={t} />
          )})
        }
        </ul>
        
        </div>
      </div>
     </div> 
  
  );
}

export default Assignments;
