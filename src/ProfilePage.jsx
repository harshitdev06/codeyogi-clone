import React from "react";
import { getMyProfileDetails, toDecachedData } from "./Api";
import Loader from "./Loader";
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

  if (!myProfileDetails) return <></>;
  return (
    <>
      {spinner && <Loader />}
      <Profile myProfileDetails={myProfileDetails} />
    </>
  );
}

export default ProfilePage;
