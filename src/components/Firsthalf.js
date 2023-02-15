import React from "react"
import Avatar from "../images/Profile.jpg"
import "../button.css"
import "../index.css"
import "https://kit.fontawesome.com/c7dafdda7c.js"
import { FaLinkedin } from 'react-icons/fa';

export default function Firsthalf(){
    return(
        <div className="firsthalf">
            <img className="avatar" alt="Avatar" src={Avatar}/>
            
            <h1 className="name">Zakaria Beloufa</h1>
            <h4 className="profession">Fronted Developer</h4>
            <p>zerktea.webserices</p>
            <div className="contactbuttons">
                <button className="button-3 Email" ><i class="fa-solid fa-envelope" style={{color:"#23252C"}}></i> Email</button>
                <button className="button-3 Git"  ><i style={{fontSize:"80%"}}><FaLinkedin/></i> Linkedin</button>
            
            </div>
        </div>

    )

 }