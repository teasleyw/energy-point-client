import React, {useEffect, useRef, useState} from "react";
import {ImageContainer} from "./AboutUsStyled";

const AboutUsSection = () => {
    const [isVisible, setVisible] = useState(false);
    const documentRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(enteries => {
            enteries.forEach(entry => {
                if(entry.isIntersecting ){
                    setVisible(true)
                    observer.unobserve(documentRef.current)
                }
            });
        });
        observer.observe(documentRef.current);
        return () => observer.disconnect()
    }, []);
    return(
        <>
            <ImageContainer ref={documentRef} animate={isVisible}/>
        </>
    )
}
export default AboutUsSection