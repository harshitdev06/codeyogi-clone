import axios from "axios";
import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import StudentsCard from "./StudentCard";

function UserList({}){
    
    const [user , setUserData]= React.useState([])
    
    React.useEffect(()=>{
        const promise = axios.get("https://randomuser.me/api/?results=30");
        promise.then( (reponse)=>{
        setUserData(reponse.data.results)
    })
    },[])

    return(
        <div className="pt-10">
            <h1 className="mb-5 text-xl font-semibold">Students list </h1>
            <div className=" py-4 mt-2 bg-white flex justify-center items-center ">
                <div className="w-full max-w-4xl ">  
                        <div className="flex  flex-wrap justify-center items-center">
                       {
                           user.map((u)=>(<StudentsCard user={u} />))
                       }
                        </div>                       
                    </div>
                </div>
            </div>
    );
}
export default UserList;