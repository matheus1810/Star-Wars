import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HomePageContainer } from "./styles"

export const HomePage = () => {

    const navigate = useNavigate()

    return (

        <HomePageContainer >
            
            <li
                onClick={() => { navigate("/characters") }}
            >Characters</li>
            <li
                onClick={() => { navigate("/planets") }}
            >Planets</li>
            <li
                onClick={() => { navigate("/vehicles") }}
            >Vehicles</li>
            <li
                onClick={() => { navigate("/species") }}
            >Species</li>
            <li
                onClick={() => { navigate("/starships") }}
            >Starships</li>
            <li
                onClick={() => { navigate("/films") }}
            >Films</li>
        </HomePageContainer>

    )
}