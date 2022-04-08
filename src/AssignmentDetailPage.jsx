import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import AssignmentDetailsCard from "./AssignmentDetailsCard";

function AssignmentDetailPage(){
    
    const [assignmentDetails , setAssignmentDetails] =React.useState([]);
    const [spinner,setSpinner] = React.useState(true);
    
    const data = useParams()
    const selectedAssignment = +(data.id);

    React.useEffect(()=>{
        const promise = axios.get(`https://api.codeyogi.io/assignments/${selectedAssignment}` , {withCredentials : true });
        promise.then( (reponse)=>{
        setAssignmentDetails(reponse.data)
        setSpinner(false);
    })
    },[])

    console.log(assignmentDetails);

    return(<>
        {
          spinner && <Loader />
        } 
        { 
            !spinner && <AssignmentDetailsCard  assignment={assignmentDetails}/>
        }
      </>
        );
}
export default AssignmentDetailPage;