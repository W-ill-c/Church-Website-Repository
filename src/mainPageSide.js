import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

function MainSide (){
    return(
        <div className="mainSide">
            <div className="calendar">
                <img src={require("./images/calendarChurch.jpg")} alt="Calendar, what's on?"></img>
                {/* <p>What's on this week?</p> */}
            </div>
            <div className="award">
                <img src={require("./images/award-buttons.jpg")} alt="Awards Image" />
            </div>
            <div className="ukraineImageSection">
                <img src="https://images.unsplash.com/photo-1646409247110-719b6cdbc702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80" alt="Ukrainian Flag" />
                <ul>
                    <li>
                        All Welcome 
                    </li>
                    <li>
                        Prayers for Peace
                    </li>
                    <li>
                        Saturdays 9 - 9:30am
                    </li>
                    <li>
                        Stay for a quiet half hour or come and go as you wish
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainSide