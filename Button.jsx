import React from "react";

function Button({text, onClick, type = "button", className}){
    return (

        <button
         className = {`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${className}`}
         type = {type}
         onClick = {onClick}

        > 
        {text}
        </button>
    )

}


export default Button;
