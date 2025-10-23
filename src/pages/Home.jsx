import React from "react"
import { Link } from "react-router-dom"
const Home = () =>{
    return (
        <div>   
                <h1>Home Page</h1>
            <h1>
                Home
            </h1>
            <ul>
                <li>
                    <Link to='/State'>usestate</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/State'>useEffect</Link>
                </li>
            </ul>
        </div>
        
    )
} 
export default Home
