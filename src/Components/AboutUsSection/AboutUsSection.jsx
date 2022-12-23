import React, {useEffect, useRef, useState} from "react";
import {ImageContainer} from "./AboutUsStyled";

const AboutUsSection = () => {
    const [isVisible, setVisible] = useState(false);
    const documentRef = useRef();

    useEffect(() => {
        console.log(1);
        const observer = new IntersectionObserver(enteries => {
            enteries.forEach(entry => {
                setVisible(entry.isIntersecting);
            });
        });
        observer.observe(documentRef.current);
    }, []);
    return(
        <>
            <ImageContainer ref={documentRef} animate={isVisible} className={`${isVisible ? "fade" : ""}`}/>
        </>
    )
}
export default AboutUsSection