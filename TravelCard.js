import React from "react"

function TravelCard(props){
    const myTravelCardStyle = {
        backgroundImage: `url(${props.imageUrl})`
    }

    return (
        <div className="travelcard-el">
            <div className="img-el flex-1" style={myTravelCardStyle}>
            </div>
             <div className="content flex-1">
             <p className="location-el">
                <span className="location">{props.location}</span>
                <span><a href={props.googleMapsUrl} className="location-link">View on Google Maps</a></span>
            </p>
            <h2 className="title">{props.title}</h2>
            <p className="date-el">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
            <p></p>
             </div>
        </div>
    )
}

export default TravelCard