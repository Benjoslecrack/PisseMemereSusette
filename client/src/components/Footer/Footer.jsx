import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { HiArrowLongRight, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import {BsUmbrella, BsInfoCircle, BsFileX} from "react-icons/bs";
import { FaHeartbeat, FaUserTie } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import "./Footer.css"

export default function Footer() {
    return (
        
        <div style={{padding:0}} className='footerContainer'>
                <Row xs={1} lg={4} style={{margin:0,marginTop:18,padding:0}} className="">
                   <div style={{height:70, background:"#ffcd38",width:'100vw',border:"8px solid #ffdd67",padding:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', fontWeight:'bold', color:'#4a4a4a',fontSize:'22px',}}>
                    Anonymous
                   </div>
                </Row>
        </div>
    );
}