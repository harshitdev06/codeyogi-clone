import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AssignmentDetailCard from "./AssignmentDeatailCard";
import Assignments from "./Assignments";
import Lecture from "./Lecture";
import MainLayout from "./MainLayout";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import Quiz from "./Quiz";

function App() {
  return (
    
      <Routes>
        <Route path="quiz" element={<Quiz/>}></Route>
        <Route path="/" element={<Navigate to="/lecture" />} />
        <Route path="/" element={<MainLayout />} >
          <Route path="assignment" element={<Assignments/>}></Route>
          <Route path="lecture" element={<Lecture/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="assignment/:id/assignmentdetail" element={<AssignmentDetailCard />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    
  );
}

export default App;
