import React from "react";
import StudentsCard from "./StudentCard";

function UserList({}){
    return(
        <div className="pt-10">
            <h1 className="mb-5 text-xl font-semibold">Students list </h1>
            <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
                <div className="w-full max-w-4xl space-y-8">
                    <ul>
                        <StudentsCard></StudentsCard>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default UserList;