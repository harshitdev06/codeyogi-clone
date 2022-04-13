import  React from "react";

function NotificationPopUP ({notification}){
    console.log(notification);
    return(
        <>
            <div className={" bg-red-100 p-4 w-full  max-w-2xl space-y-2"}>
                <h1 className="text-red-200 font-medium "><img src="https://img.icons8.com/material-rounded/24/fa314a/error--v1.png"/> Failed</h1>
                <h1>Reason : {notification} </h1>
            </div>
        </>
    );
}
export default NotificationPopUP;