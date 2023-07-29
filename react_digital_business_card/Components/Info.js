import React from "react"

export default function Info() {
    return(
        <div className="info-card">
            <img className="info-card-image" src="https://placehold.co/300x300/png" />
            <h2 className="info-card-name" >Xumed Tmg</h2>
            <p className="info-card-job" >Frontend Developer</p>
            <p className="info-card-site" >Website link</p>
            <div className="info-card-buttons">
                <button className="info-card-mail">
                    <img src="./images/mail.svg" />
                    <p>Email</p>
                </button>
                <button className="info-card-link">
                    <img src="./images/linkedin.svg" />
                    Linkedin
                </button>
            </div>
        </div>
    )
}