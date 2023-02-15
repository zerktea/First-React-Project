import React from "react"
import Firsthalf from "./components/Firsthalf"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

import "./button.css"
import "./index.css"

export default function App() {
    return (
        <div className="containerapp">

            <Firsthalf />
            <div className="textinfo">
                <About/>
                <Interests/>
                </div>
            <Footer/>
        </div>
    )
}