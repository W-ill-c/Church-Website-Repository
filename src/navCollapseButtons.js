import React, { useState, useEffect, useRef } from "react"
import Button from 'react-bootstrap/Button';

import { DropdownButtons } from "./navBarInfo"

export default function DropDown(){

    let menuRef = useRef();

    const [open, setOpen] = useState(false)

    function dropHover(e) { 
        e.target.style.color = 'white';
        e.target.style.cursor = 'pointer'
    }
    
    function dropOff(e) {
        e.target.style.color = 'black';
        e.target.style.cursor = 'defualt'
    }


    useEffect(()=>{

        let handler = (e) =>{
            if (!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)
    })

    return(
        <div ref={menuRef}>
            <Button onClick={() => { setOpen(!open) }} variant="primary" className="navButtons" type="button">More</Button>
            <div  onClick={()=>{ setOpen(!open)}} className={open ? "dropdownMenuActive services" : "dropdownMenuInactive"}>
                <ul>
                    {DropdownButtons.map((button) => {
                        return (
                        <li onMouseOver={dropHover}
                            onMouseOut={dropOff}>{button.title}
                        </li>
                            )
                    }
                    )}
                </ul>
            </div>       
        </div>     
    )
}