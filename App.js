import React from "react"
import data from "./data"
import TravelCard from "./TravelCard"
import Navbar from "./Navbar"

//console.log(data)

function App(){
    const travelData = data.map((item)=>{
        return (
            <TravelCard 
            key={item.title}
            {...item}
            />
        )
    })
    
    return (
        <section>
        <Navbar />
        <div className="main">
        {travelData}
        </div>
        </section>
    )
}


export default App