import React from "react";

function LectureCard(props){
    return(
        <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5 ">
            <div className="p-3">
                <div className="">
                    <h1 className="font-medium ">Lecture #{props.lectureNumber}<span className="text-gray-400 ml-3">({props.date})</span></h1>

                    <span className="mt-1 text-sm text-gray-600">Duration : {props.duration}</span>
                </div>
                <div className="inline-block mt-3  p-1 text-sm font-medium">
                    <ul className="list-disc pl-8 pb-4">
                    <li>Topic</li>
                    <li>Topic</li>
                    <li>Topic</li>
                    </ul>  
                </div> 
            </div>
            <div className=" px-8 border-t  ">
                <div className="py-4 w-full ">  
                <a href="https://www.google.com/" type="blank" className="flex justify-center items-center space-x-2 text-center">
                    <img src="https://img.icons8.com/material-rounded/24/000000/link--v1.png"/>
                    <span className="text-gray-500 font-medium hover:text-black">Watch/Download lecture</span></a>
                </div>            
            </div>
        </li>
    );
}
export default LectureCard;