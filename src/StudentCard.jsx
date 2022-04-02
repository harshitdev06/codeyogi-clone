import React from "react";
import axios from "axios";

function StudentsCard({user}){

    return (
        <div className=" m-4 space-y-1">

                <div className="w-64 shadow-md overflow-hidden">
                    <img className="rounded-md object-cover h-full w-full" src={user.picture.large} alt="" />
                </div>

                <div className="flex flex-col mt-2">
                    <h1 className="font-medium">{user.name.title} {user.name.last}</h1>
                    <h1 className="text-indigo-500 font-medium">{user.login.username}</h1>
                </div>
                
                <div className="flex items-center space-x-4">
                    <a href="https://in.linkedin.com/"><img src="https://img.icons8.com/material-rounded/24/000000/linkedin--v1.png"/></a>
                    <a href="https://twitter.com/"><img src="https://img.icons8.com/android/24/000000/twitter.png"/></a>
                </div>
            
            </div>
    );
}
export default StudentsCard;