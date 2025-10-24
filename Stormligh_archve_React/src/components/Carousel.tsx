import { useState } from "react";
import type {Map} from "./Maps";


type CarouselProps = {
  slides: Array<Map>;
};

export function Carousel({slides} : CarouselProps) {

    const [index, setIndex] = useState(0);


    if (!slides || slides.length === 0) {
        return <div style={{ height: 200, display: "grid", placeItems: "center" }}>No slides</div>;
    } 



    const carouselStyle : React.CSSProperties = {
        height: "100%",
        position: "relative",
    };
    const slideStyle : React.CSSProperties = {
        width: "100%",
        height: "100%",
        borderRadius: "11px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[index].map})`,
    };
    const leftArrowStyle : React.CSSProperties = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    const rightArrowStyle : React.CSSProperties = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };


    const nextIndex=(next:number)=>{
        setIndex((prev) => (prev + next + slides.length) % slides.length);
    }


    return (
        <div style={carouselStyle}>
            <div style={slideStyle}></div>
            <div style={leftArrowStyle} onClick={() => nextIndex(-1)}>&lt;</div>
            <div style={rightArrowStyle} onClick={() => nextIndex(1)}>&gt;</div>
        </div>
    );
}