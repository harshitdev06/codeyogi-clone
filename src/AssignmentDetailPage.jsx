import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import AssignmentDetailsCard from "./AssignmentDetailsCard";
import { getAssignmentDettails } from "./Api";

function AssignmentDetailPage() {
  const cachedAssignmentDetails =
    JSON.parse(localStorage.getItem("assignmentDeails")) || [];
  const [assignmentDetails, setAssignmentDetails] = React.useState(
    cachedAssignmentDetails
  );
  const [spinner, setSpinner] = React.useState(true);

  const data = useParams();
  const selectedAssignment = +data.id;

  React.useEffect(() => {
    const promise = getAssignmentDettails(selectedAssignment);
    promise.then((details) => {
      setAssignmentDetails(details);
      setSpinner(false);
    });
  }, []);

  return (
    <>
      {spinner && <Loader />}
      {!spinner && <AssignmentDetailsCard assignment={assignmentDetails} />}
    </>
  );
}
export default AssignmentDetailPage;