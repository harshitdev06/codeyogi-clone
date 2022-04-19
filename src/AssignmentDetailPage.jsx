import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import AssignmentDetailsCard from "./AssignmentDetailsCard";
import { getAssignmentDettails, toDecachedData } from "./Api";

function AssignmentDetailPage() {
  const cachedAssignmentDetails =
    toDecachedData("assignmentDeails") || undefined;
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
  if (!assignmentDetails) return <></>;
  return (
    <>
      {spinner && <Loader />}
      {<AssignmentDetailsCard assignment={assignmentDetails} />}
    </>
  );
}
export default AssignmentDetailPage;