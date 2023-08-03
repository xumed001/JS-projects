import React from "react"

export default function Header() {
    return(
        <header className="header">
            <img 
                className="header--img" 
                src="./images/globe_icon.svg" 
                alt="header-logo of a globe" 
            />
            <p className="header--text"> my travel journal. </p>
        </header>
    )
}