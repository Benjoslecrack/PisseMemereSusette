import React, {useState, useEffect} from "react";
import axios from 'axios';
// Bootstrap Grid
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";

// Import style
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";


export default function Home() {
  
  const [toiletsAroundLoc, setToiletsAroundLoc] = useState([]);

  useEffect(() => {
    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=sanisettesparis&q=&facet=type&facet=statut&facet=arrondissement&facet=horaire&facet=acces_pmr&facet=relais_bebe`)
      .then((res) => {
        console.log(res.data);
        /* #TODO: limiter cette variable a ~10-15 */
        setToiletsAroundLoc(res.data.records)
      })
  }, []);


  return (
    <>
    {/* geoloc */}
    <section className="d-flex justify-content-center">
    <iframe style={{marginBottom:30}} src="https://opendata.paris.fr/explore/embed/dataset/sanisettesparis/map/?disjunctive.type&disjunctive.statut&disjunctive.arrondissement&disjunctive.horaire&disjunctive.acces_pmr&disjunctive.relais_bebe&basemap=jawg.dark&location=15,48.87884,2.32236&static=false&datasetcard=true&scrollWheelZoom=true" allow="geolocation" width="350" height="490" frameborder="2"></iframe>
    </section>
    {/* List of toilets */} 
    <section className="d-flex justify-content-center">
      <Row md={12} className="d-flex justify-content-center">
      <Col sm={12} md={8} lg={6} xl={5}>

        {toiletsAroundLoc.map((value)=>(
              <><Card style={{ width: '100%' }}>
                      <Card.Body>
                        <Row style={{display:'flex', flexDirection:'row'}} className="d-flex flex-direction-row">
                          <Col style={{display:'flex', flexDirection:'column'}} md={3}>
                            cc
                          </Col>
                          <Col style={{display:'flex', flexDirection:'column'}} md={6}>
                            <div>type : {value.fields.type}</div>
                            <div>arrondissement : {value.fields.arrondissement}</div>
                            <div>horaire : {value.fields.horaire}</div>

                            
                          </Col>
                          <Col style={{display:'flex', flexDirection:'column'}} md={3}>
                            
bebe pmr  {value.fields.arrrondissement}                         </Col>
                        </Row>
                      </Card.Body>

                        </Card>

                  
                        </>
        ))}
                  </Col>

      </Row>
      </section> </>
  );
}