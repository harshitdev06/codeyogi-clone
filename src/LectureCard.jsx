import React from "react";
import MDEditor from '@uiw/react-md-editor';
import {DateTime} from "luxon"


function LectureCard({lecture}){

    const date = lecture["created_at"];
    const splitedDate = date.split('T');
    
        const startTime = lecture["start_time"];
        const endTime = lecture["end_time"];

        const startTimeArray = startTime.split("T");
        const endTimeArray = endTime.split("T");

        const st = startTimeArray[1]
        const et = endTimeArray[1]

        const actualSTarray = st.split("Z");
        const actualETarray = et.split("Z");
        const finalSt = actualSTarray[0];
        const finalEt = actualETarray[0];

        function getTimeInSeconds(str) {
 
           let curr_time = [];
 
           curr_time = str.split(':')
           for (let i = 0; i < curr_time.length; i++) {
               curr_time[i] = parseInt(curr_time[i]);
           }
 
           let t = curr_time[0] * 60 * 60
               + curr_time[1] * 60
               + curr_time[2];
 
           return t;
       }
          
        const stInSecond = getTimeInSeconds(finalSt);
        const etInSecond = getTimeInSeconds(finalEt);
        const diffInSecond = etInSecond - stInSecond;

        function convertSecToTime(t) {

           let hours = Math.floor(t / 3600);
           let hh;
            if( hours < 10){
                hh= "0" + (hours).toString()
            }else
            {
               hh= (hours).toString()
            };

           let min = Math.floor((t % 3600) / 60);
           let mm;
           if( min < 10){
                mm = "0" + (min).toString()
           }else{
                mm = (min).toString()
           }

           let sec = ((t % 3600) % 60);
           let ss;
           if(sec < 10 ){
                ss = "0" + (sec).toString();
           }else{
                ss = (sec).toString();
           }

           let duration = hh + ":" + mm + ":" + ss;
           return duration;
       }

    return(
        <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5 ">
            <div className="p-3">
                <div className="">
                    <h1 className="font-medium ">Lecture #{lecture.index}<span className="text-gray-500 ml-3">({DateTime.fromISO(lecture.created_at).toFormat(`ccc LLL dd yyyy`)})</span></h1>

                    <span className="mt-1 text-sm text-gray-600">Duration : { convertSecToTime(diffInSecond)  } </span>
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