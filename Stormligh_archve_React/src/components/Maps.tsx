import { useState } from "react";
import warcamp from '../assets/Warcamps.jpg';
import '../styles/Maps.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const Maps= ()=>{

    const maps = ['https://www.17thshard.com/uploads/monthly_2022_02/620553597c6bd_RosharReimagined2022v2.1.png.4146601ce4dce297e7ff436e1fba3a13.png',
        warcamp
    ];
    const [map, setMap] = useState<number>(0);

    const selectIndex = (index:number) => {
        setMap(index);
    }

    return (
        <div className="carousel-wrapper">
            <Carousel activeIndex={map} onSelect={selectIndex} interval={null}>
                {maps.map((src, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="image-container">
                            <img src={src} alt={`Map ${idx}`} />
                        </div>
                        <Carousel.Caption>
                            <h3>Map {idx + 1}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}