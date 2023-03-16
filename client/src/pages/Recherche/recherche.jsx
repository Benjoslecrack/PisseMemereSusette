import React, { useEffect, useState } from "react";
import axios from "axios"

// Bootstrap Grid
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

// Import style
import "bootstrap/dist/css/bootstrap.min.css";
import "./recherche.css";

export default function Home() {

    const types = ['Tous', 'TOILETTES', 'SANISETTE', 'LAVATORY', 'URINOIR'];

    const handleChange = (event) => {
        console.log(event.target.value)
        setType(`&refine.type=${event.target.value}`)
        if (event.target.value === 'Tous') {
            setType('')
        } else {
            setType(`&refine.type=${event.target.value}`)
        }
        setSelectedOption(event.target.value)
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked == false) {
            setPMR('')
        } else {
            setPMR(`&refine.acces_pmr=Oui`)
        }
    };
    const [selectedOption, setSelectedOption] = useState('Tous')
    const [bebe, setBebe] = useState()
    const [pmr, setPMR] = useState()
    const [arron, setArron] = useState()
    const [type, setType] = useState("")
    const [horaire, setHoraire] = useState()
    const [url, setUrl] = useState(`https://opendata.paris.fr/explore/embed/dataset/sanisettesparis/map/?disjunctive.type&disjunctive.statut&disjunctive.arrondissement&disjunctive.horaire&disjunctive.acces_pmr&disjunctive.relais_bebe${type}&basemap=jawg.dark&location=12,48.85987,2.34518&static=false&datasetcard=true&scrollWheelZoom=true`)

    useEffect(() => {
        setUrl(`https://opendata.paris.fr/explore/embed/dataset/sanisettesparis/map/?disjunctive.type&disjunctive.statut&disjunctive.arrondissement&disjunctive.horaire&disjunctive.acces_pmr&disjunctive.relais_bebe${type}&basemap=jawg.dark&location=12,48.85987,2.34518&static=false&datasetcard=true&scrollWheelZoom=true`);
        console.log(url)
    }, [bebe, pmr, arron, type, horaire])

    return (
        <>
            <div id="carte" className="carte">
                <iframe styles="" src={`${url}`} width="400" height="500" frameborder="0"></iframe>
            </div>

            <div className="type">
                <select value={selectedOption} onChange={handleChange}>
                    {types.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    PMR
                </label>
            </div>

        </>);
}