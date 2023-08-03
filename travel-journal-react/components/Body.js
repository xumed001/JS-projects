import React from "react"

export default function Body(item) {
    return(
        <>
            <main className="main">
                <img 
                    className="main--image"
                    src={item.imageUrl}
                />
                <div className="main--text">
                    <div className="main--text--loc">
                        <img src="../images/loc_marker.svg" />
                        <span className="main--text--country">
                            {item.location.toUpperCase()}
                        </span>
                        <a 
                            href={item.googleMapsUrl}>
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="main--text--header" >
                        {item.title}
                    </h1>
                    <p className="main--text--dates" >
                        {item.startDate} - {item.endDate}
                    </p>
                    <p className="main--text--des" >
                        {item.description}
                    </p>
                </div>
            </main>
            <hr />
        </>
    )
}