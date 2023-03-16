import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { HiArrowLongRight, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import {BsUmbrella, BsInfoCircle} from "react-icons/bs";
import { FaHeartbeat, FaUserTie } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import "./Footer.css"

export default function Footer() {
    return (
        
        <div className='footerContainer'>
            <div className="container">
                <Row xs={1} lg={4} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='cardAllFooter'>
                                <Card.Body className='cardBodyFooter'>
                                    <Card.Title className='titlecard'>Liens utiles</Card.Title>
                                    <Card.Text className="textinCard">
                                        <ul>
                                            <li ><a href="/" className="linkInFooter"><HiArrowLongRight />Accueil</a></li>
                                            <li><a href="/articles/particuliers" className="linkInFooter"><HiArrowLongRight />Particuliers</a></li>
                                            <li><a href="/articles/professionnels" className="linkInFooter"><HiArrowLongRight />Professionnels</a></li>
                                            <li><a href="/articles/entreprises" className="linkInFooter"><HiArrowLongRight />Entreprises</a></li>
                                            <li><a href="/lexique" className="linkInFooter"><HiArrowLongRight />Lexique</a></li>
                                            <li><a href="/rgpd" className="linkInFooter"><HiArrowLongRight />RGPD</a></li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                     {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='cardAllFooter'>
                                <Card.Body className='cardBodyFooter'>
                                    <Card.Title className='titlecard'>Nos Services</Card.Title>
                                    <Card.Text className="textinCard">
                                        <ul>
                                            <li> <FaHeartbeat /> Santé</li>
                                            <li> <BsUmbrella  /> Prévoyance</li>
                                            <li> <FaUserTie /> RC Pro</li>
                                            <li> <AiOutlineLineChart /> Retraite</li>
                                            <li> <BsInfoCircle /> Informations</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='cardAllFooter'>
                                <Card.Body className='cardBodyFooter'>
                                    <Card.Title className='titlecard'>Contact</Card.Title>
                                    <Card.Text className="textinCard">
                                        <ul>
                                            <li> <HiOutlinePhone /> +33 6 65 78 66 91</li>
                                            <li> <HiOutlineMapPin /> 5 bis avenue Marcel Proust
                                                28 000 Chartres</li>
                                        </ul>
                                    </Card.Text>
                                    <Button href='/contact' style={{backgroundColor:"#FDB833", borderColor:"#FDB833"}}> Contactez-nous ici</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col >
                            <Card className='cardAllFooter'>
                                <Card.Body className='cardBodyFooter'>
                                    <Card.Title className='titlecard'>lehubdelassurance.fr</Card.Title>
                                    <Card.Text className="textinCard">
                                        <p>
                                            Site d'information sur les assurances à destination des professionnels et entreprises.<span style={{fontWeight:"700", display:"unset", color:"#296EB4", fontSize:"17px"}}> Lehubdelassurance.fr </span>appartient à Mayak Services, courtier en assurances enregistré à l'ORIAS (www.orias.fr) sous le numéro 19002085
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}