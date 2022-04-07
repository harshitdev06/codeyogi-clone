import React from "react";
import LectureCard from "./LectureCard";
import axios from "axios";
import Loader from "./Loader";

function Lecture() {

    const [spinner,setSpinner] = React.useState(true);
    const [lecture , setLecture] = React.useState([]);

     React.useEffect(()=>{
        const promise = axios.get("https://api.codeyogi.io/batches/1/sessions",{withCredentials : true });
        promise.then( (reponse)=>{
        setLecture(reponse.data)
        setSpinner(false);
    })
    },[])


  return (
  <>
    <div className="pt-10">
        {
          spinner && <Loader />
        }
      <h1 className="mb-5 text-xl font-semibold">Lecture list </h1>
    </div>
      <div className="  px-4 py-4 mt-2 bg-white flex justify-center items-center ">
        <div className="w-full max-w-4xl space-y-8">
        <ul className="space-y-2">
          {
              !spinner &&   lecture.map((t)=>{return (
             <LectureCard lecture={t} key={t.id} />)})
          }
        </ul>
        </div>
      </div>
   </>  
);
}

export default Lecture;
