import React from "react";
import ServicesCard from './servicesCard'
import NavBar from './navBar'

export default function ServicesPage(){
    

    return(
        <div className="wholeServices">
            <NavBar />
            <img className="candlesChurch" src={require("./images/candlesChurch.jpg")}></img>
            <header> 
                <h3> Services </h3> 
            </header>
            <ServicesCard />
        </div>
    )
}
