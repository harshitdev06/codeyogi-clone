import React from "react";

function Loader({ src , children}){
    return(
        <div className="flex space-x-2 items-center ">
            <h1 className="font-medium text-medium">{children}</h1>
            <img className={"animate-spin"} src={src}/>
        </div>
    );
}
export default Loader;