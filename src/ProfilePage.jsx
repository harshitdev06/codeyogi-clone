import React, { useContext, setTimeout } from "react";
import { getMyProfileDetails, toDecachedData } from "./Api";
import AlertContext from "./Context";
import Loader from "./Loader";
import NotificationPopUP from "./NotificationPopUp";
import Profile from "./Profile";

function ProfilePage() {
  const cachedMyProfileDetails =
    toDecachedData("myProfileDetails") || undefined;
  const [myProfileDetails, setMyProfileDetails] = React.useState(
    cachedMyProfileDetails
  );
  const [spinner, setSpinner] = React.useState(true);

  React.useEffect(() => {
    const promise = getMyProfileDetails();
    promise.then((details) => {
      setMyProfileDetails(details);
      setSpinner(false);
    });
  }, []);
  const { message } = useContext(AlertContext);

  console.log(message);

  if (!myProfileDetails) return <></>;
  return (
    <>
      {spinner && <Loader />}
      {message && <NotificationPopUP />}
      <Profile myProfileDetails={myProfileDetails} />
    </>
  );
}

export default ProfilePage;
