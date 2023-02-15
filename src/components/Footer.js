import React from "react"

import "../button.css"
import "../index.css"
import "https://kit.fontawesome.com/c7dafdda7c.js"
import { FaGithub } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import{FaFacebookSquare}from 'react-icons/fa';
import{FaTwitter} from 'react-icons/fa';
 export default function Footer(){
    return (
        <div className="footer">
            
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaFacebookSquare/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaGithub/></a>
        </div>
    )

 }