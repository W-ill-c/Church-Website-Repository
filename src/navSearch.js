import React from "react"
import { DropdownButton, FormGroup } from "react-bootstrap"

export default function NavInput(){

    function mouseOverButton (e) {
        e.target.style.backgroundColor="#F5BD02"
    }

    function mouseOverOff (e) {
        e.target.style.backgroundColor="blue"
    }

    return(
        <div className="navForm">
            <form>
                <input type="text" placeholder="Search here for ..."></input>
                <button onMouseOver={mouseOverButton} onMouseOut ={mouseOverOff} type="submit">Go</button>
            </form>
        </div>              
    )
}