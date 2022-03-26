import React from "react";
import { Link } from "react-router-dom";
function LinkComponent(props) {
    return (
            <Link to={props.to} className="flex items-center text-gray-300 font-medium p-2 hover:text-white hover:bg-gray-600 rounded">
                <img className="object-cover mr-3" src={props.src} />
                {props.children}</Link>
    );
} export default LinkComponent;