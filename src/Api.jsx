import axios from "axios";
 
const BASE_URL = "https://api.codeyogi.io";
const RANDOMUSER_BASE_URL = "https://randomuser.me/api";

const toCachedData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export async function getUser() {
  const response = await axios.get(`${RANDOMUSER_BASE_URL}/?results=30`);
  const users = response.data.results;
  toCachedData("users", users);
  return users;
}

export async function getAssignmentList() {
  const responsePromise = await axios.get(`${BASE_URL}/batches/1/assignments`, {
    withCredentials: true,
  });
  const assignmentList = responsePromise.data;
  toCachedData("assignmentList", assignmentList);
  return assignmentList;
}

export async function getAssignmentDettails(selectedAssignment) {
  const response = await axios.get(
    `${BASE_URL}/assignments/${selectedAssignment}`,
    {
      withCredentials: true,
    }
  );
  const assignmentDetails = response.data;
  toCachedData("assignmentDetails", assignmentDetails);
  return assignmentDetails;
}

export async function getLectureList() {
  const reposne = await axios.get(`${BASE_URL}/batches/1/sessions`, {
    withCredentials: true,
  });
  const lectureList = reposne.data;
  toCachedData("lectureList", lectureList);
  return lectureList;
}

export const toDecachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};