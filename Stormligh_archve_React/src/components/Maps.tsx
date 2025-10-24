import { useState } from "react";
import warcamp from '../assets/Warcamps.jpg';
import '../styles/Maps.css';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { TopBar } from "./TopBar";
import { Carousel } from "./Carousel";
// import { Carousel } from "react-bootstrap";

export type Map={
    map: string;
    caption: string;
}

export const Maps= ()=>{

    const maps: Array<Map> = [
        {
            map: 'https://www.17thshard.com/uploads/monthly_2022_02/620553597c6bd_RosharReimagined2022v2.1.png.4146601ce4dce297e7ff436e1fba3a13.png',
            caption: 'First Map'
        },
        {
            map: warcamp,
            caption: 'Thrcamps'
        }
    ]

    return (
        <> 
            <TopBar banner="Maps" buttonString="Back Home"/>
            <Carousel slides={maps} />
        </>
    )
}