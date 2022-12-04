import React from "react";
import {NavButtons, DropdownButtons} from './navBarInfo.js'
import Button from 'react-bootstrap/Button';
import DropDown from './navCollapseButtons'
import { useNavigate } from 'react-router-dom'


function NavBarButtons (){

    const navigate = useNavigate()

    return(
        <div className="buttonsNav">

            {NavButtons.map((button)=>{
                return(
                    <Button onClick={()=>{navigate(button.history)}} variant="primary" className="navButtons" type="button">{button.title}</Button>
                )
            }
            )}
            
            <DropDown />
        </div>
    )
}

export default NavBarButtons