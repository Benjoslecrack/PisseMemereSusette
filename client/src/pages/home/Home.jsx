import React, {useState, useEffect} from "react";
import axios from 'axios';
// Bootstrap Grid

import {BiWalk} from 'react-icons/bi';
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
  
  const [positionUser, setPositionUser] = useState({});
  const [toiletsAroundLoc, setToiletsAroundLoc] = useState([]);
  const [distanceAroundToSearch, setDistanceAroundToSearch] = useState();

  var now = new Date();
  const heure   = now.getHours();
  let minute  = now.getMinutes();

  console.log(heure);
  console.log(minute);
  const valueToDecimal =(number) =>{
    let numberToFixed = parseFloat(number).toFixed(0);
    console.log();
    return numberToFixed
  }
  useEffect(() => {
    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=sanisettesparis&q=&rows=10&facet=type&facet=statut&facet=arrondissement&facet=horaire&facet=acces_pmr&facet=relais_bebe&geofilter.distance=48.88%2C2.38%2C500`)
      .then((res) => {
        console.log(res.data);
        let filter;
        if (heure>=22 || heure<=6){
          filter = res.data.records.filter((record=> record.fields.horaire !=="6 h - 22 h" ))
        }
        else{
          filter = res.data.records;
        }
        /* #TODO: limiter cette variable a ~10-15 */
        setToiletsAroundLoc(filter);
      })
  }, []);


  return (
    <>
    {/* geoloc */}
    <section className="d-flex justify-content-center">
    <iframe style={{margin:30, }} src="https://opendata.paris.fr/explore/embed/dataset/sanisettesparis/map/?disjunctive.type&disjunctive.statut&disjunctive.arrondissement&disjunctive.horaire&disjunctive.acces_pmr&disjunctive.relais_bebe&basemap=jawg.dark&location=15,48.87884,2.32236&static=false&datasetcard=true&scrollWheelZoom=true" allow="geolocation" width="350" height="500" ></iframe>
    </section>
    {/* List of toilets */} 
    <section className="d-flex justify-content-center">
      <Row md={12} className="d-flex justify-content-center">
      <Col sm={12} md={8} lg={6} xl={5}>
      <h1 className="text-3xl font-bold underline">Liste des toilettes les plus proches</h1>

        {toiletsAroundLoc.map((value)=>(
              <><Card style={{ width: '100%',margin:10 }} >
                      <Card.Body>
                        <Row style={{display:'flex', flexDirection:'row'}} className="d-flex flex-direction-row">
                          <Col style={{display:'flex', flexDirection:'column'}} md={3}>
                          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/toilet.png"></img>
                          </Col>
                          <Col style={{display:'flex', flexDirection:'column'}} sm={6}>
                            <div className="text-3xl font-bold underline">type : {value.fields.type}</div>
                            <div>arrondissement : {value.fields.arrondissement}</div>
                            {value.fields.horaire ==="Voir fiche équipement" ? ( <a href={`${value.fields.url_fiche_equipement}`}>horaire : voir fiche horaire</a> ): (<div>horaire : {value.fields.horaire}</div>) }
                           

                            
                          </Col>
                          <Col style={{display:'flex', flexDirection:'column',fontWeight:800}} md={3}>
                             {valueToDecimal(value.fields.dist)} metres ...<BiWalk size={28}/>                   </Col>
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