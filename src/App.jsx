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
import { uniqueId } from "lodash";

function App() {
  const [alerts, setAlerts] = React.useState([]);

  const showAlerts = (message, status = "success", dismiss = 4) => {
    const id = uniqueId();
    const alert = { message, status, id };
    setAlerts([...alerts, alert]);
    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };
  const removeAlert = (alert) => {
    setAlerts((latestData) => {
      return latestData.filter((a) => a !== alert);
    });
  };

  const data = { alerts, showAlerts, removeAlert };
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
