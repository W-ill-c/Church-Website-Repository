import React from "react";
import { BsYoutube } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

function MainFooter (){
    return(
        <div className="mainFooter">
            <ul>
                <li>Connect with us on Social Media</li>
                <li>
                    <a href="https://www.youtube.com/channel/UCAwIQjZJt3jYRZZOiTSVZcQ">
                        <BsYoutube className="footerIcon youtube"></BsYoutube>
                    </a>
                    <a href="https://www.facebook.com/CavershamStA">
                        <BsFacebook className="footerIcon facebook"></BsFacebook>
                    </a>
                    <a href="https://twitter.com/CavershamStA">
                        <BsTwitter className="footerIcon twitter"></BsTwitter>
                    </a>
                </li>
            </ul>            
        </div>
    )
}

export default MainFooter