import React from "react";
import MDEditor from '@uiw/react-md-editor';
import {DateTime} from "luxon"


function LectureCard({lecture}){

        const rawStartingTime = lecture["start_time"];
        const rawEndingTime  = lecture["end_time"]; 

        const cleanedSt = new Date(rawStartingTime)
        const cleanedRt = new Date (rawEndingTime);
        const timeDifference = cleanedRt - cleanedSt;
        const rawDuration = new Date(timeDifference).toISOString()
        const cleanedDuration = rawDuration.substring(11 , 19); 

    return(
        <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5 ">
            <div className="p-3">
                <div className="">
                    <h1 className="font-medium ">Lecture #{lecture.index}<span className="text-gray-500 ml-3">({DateTime.fromISO(lecture.created_at).toFormat(`ccc LLL dd y`)})</span></h1>

                    <span className="mt-1 text-sm text-gray-600">Duration : {cleanedDuration} </span>
                </div>
                <div className=" mt-3  pb-4 p-1 text-medium font-medium">
                    <MDEditor.Markdown className="!bg-white !text-black" source={lecture.topic} /> 
                </div> 
            </div>
            <div className=" px-8 border-t  ">
                <div className="py-4 w-full ">  
                <a href={lecture["recording_url"]} target="_blank" type="blank" className="flex justify-center items-center space-x-2 text-center">
                    <img src="https://img.icons8.com/material-rounded/24/4a90e2/external-link.png"/>
                    <span className="text-gray-500 font-medium hover:text-black">Watch/Download lecture</span></a>
                </div>            
            </div>
        </li>
    );
}
export default LectureCard;