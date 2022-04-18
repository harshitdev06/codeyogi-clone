import axios from "axios";

const toCachedData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export function getUser() {
  const response = axios.get("https://randomuser.me/api/?results=30");
  const usersPromise = response.then((u) => {
    const users = u.data.results;
    toCachedData("users", users);
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
    toCachedData("assignmentList", assignmentList);
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
    toCachedData("assignmentDetails", assignmentDetails);
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
    toCachedData("lectureList", lectureList);
    return lectureList;
  });
  return lecturePromise;
}

export const toDecachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};