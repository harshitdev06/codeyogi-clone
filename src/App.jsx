import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import AssignmentDetailPage from "./AssignmentDetailPage";
import Assignments from "./Assignments";
import AlertContext from "./Context";
import Lecture from "./Lecture";
import LogInPage from "./LogInPage";
import MainLayout from "./MainLayout";
import PageNotFound from "./PageNotFound";
import ProfilePage from "./ProfilePage";
import Quiz from "./Quiz";
import UserList from "./UserList";

function App() {
  const [alert, setAlert] = React.useState(null);
  const removeAlert = () => {
    setAlert(null);
  };
  const showAlert = (message, status = "success", dismiss = 3) => {
    setAlert({
      message,
      status,
    });
    dismiss &&
      setTimeout(() => {
        removeAlert();
      }, dismiss * 1000);
  };
  const data = { alert, showAlert, removeAlert };
  return (
    <AlertContext.Provider value={data}>
      <div>
        <Routes>
          <Route path="quiz" element={<Quiz />}></Route>
          <Route path="login" element={<LogInPage></LogInPage>}></Route>
          <Route path="/" element={<Navigate to="/lecture" />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="assignment" element={<Assignments />}></Route>
            <Route path="lecture" element={<Lecture />}></Route>
            <Route path="profile" element={<ProfilePage />}></Route>
            <Route path="/studentslist" element={<UserList />}></Route>
            <Route
              path="assignment/:id/assignmentdetail"
              element={<AssignmentDetailPage />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </AlertContext.Provider>
  );
}
export default App;
