import React from "react";
import axios from "axios";
import {string} from  "yup";

function SubmmissionCard({ toggleReSubmisionPopUp , assignment_id , onSubmit}){

    const [submissionLink , setSubmissionLink] = React.useState('');
    const [submissionError , setSubmissionError ] = React.useState('');
    const [isValidUrl , setIsValidUrl ] = React.useState(true);

    const toSetSubmitInout = (data)=>{
        setSubmissionLink(data.target.value)
    }
 
    const toPassDataToParent =(e)=>{
        e.preventDefault()

        const urlValidator = string().url('This Url is\'nt valid.Please enter a Valid');
        
        try {
            urlValidator.validateSync(submissionLink)
        }catch(e){
            setSubmissionError(e.message);
        }

        axios.put(`https://api.codeyogi.io/assignment/${assignment_id}/submit`,{submissionLink},{ withCredentials: true});
        onSubmit(submissionLink)
        toggleReSubmisionPopUp();   
    }
    return (
        <form  className="h-screen fixed top-0 left-0 w-screen flex justify-center items-center">        
              <button onClick={toggleReSubmisionPopUp} className="fixed mr-4 mt-4 top-0 right-0 ">
                 <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-9.png"/>
              </button>
            <div className="bg-gray-50 p-4 rounded-md p-4 max-w-2xl w-full border border-gray-200 shadow-md z-999 ">
                <div className="border-y py-4 mt-5">
                    <div className="flex space-x-10 py-4 items-center">
                        <h1 className="text-sm text-gray-600  font-medium">Submission Link</h1>
                        <input value={submissionLink} onChange={toSetSubmitInout} placeholder="Submission Link" type="text" className="grow shadow px-4 py-2 bg-gray-50 rounded-md border border-gray-400" />
                    </div>
                </div>
                <div className="py-4">
                    <button disabled={submissionLink === ""} onClick={ toPassDataToParent }  type="submit" className="px-8 rounded py-2 bg-indigo-600 text-white font-medium inline-block ">Submit</button>
                </div>
            </div>
        </form>
    );
}
export default SubmmissionCard