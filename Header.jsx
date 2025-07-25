import React from "react";

function Header({title, subtitle, className}){
    return (

        <div className = {` whitespace-pre-line ${className}`}>
            <h1>{title}</h1>
            <p className="italic text-lg">{subtitle}</p>
        </div>
    )

}

export default Header;