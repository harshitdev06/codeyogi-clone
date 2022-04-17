import axios from "axios";

export function getUser() {
  const response = axios.get("https://randomuser.me/api/?results=30");
  const usersPromise = response.then((u) => {
    const users = u.data.results;
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  });
  return usersPromise;
}

export function getAssignmentList() {
  const responsePromise = axios.get(
    "https://api.codeyogi.io/batches/1/assignments",
    {
      withCredentials: true,
    }
  );
  const assignmentPromise = responsePromise.then((response) => {
    const assignmentList = response.data;
    localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
    return assignmentList;
  });
  return assignmentPromise;
}

export function getAssignmentDettails(selectedAssignment) {
  const response = axios.get(
    `https://api.codeyogi.io/assignments/${selectedAssignment}`,
    { withCredentials: true }
  );
  const detailsPromise = response.then((details) => {
    const assignmentDetails = details.data;
    localStorage.setItem(
      "assignmentDetails",
      JSON.stringify(assignmentDetails)
    );
    return assignmentDetails;
  });
  return detailsPromise;
}

export function getLectureList() {
  const reposne = axios.get("https://api.codeyogi.io/batches/1/sessions", {
    withCredentials: true,
  });
  const lecturePromise = reposne.then((lecture) => {
    const lectureList = lecture.data;
    localStorage.setItem("lectureList", JSON.stringify(lectureList));
    return lectureList;
  });
  return lecturePromise;
}
