import {useState} from "react";
import "./Accordion.css"
import {AccordionContainer, AccordionContent, AccordionDetails} from "./AccordionStyled";

const Accordion = (
    {
        title,
        content,
        classNameList = []
    }) => {

    let classNameString = ""
    for (let i = 0; i < classNameList.length; i++) {
        classNameString = classNameString + classNameList[i] + " "
    }

    const [toggleAccordion,setToggleAccordion] = useState(false)
    return(
        <AccordionContainer className={classNameString} onClick={() => setToggleAccordion(!toggleAccordion)}>
            <AccordionContent className={`${toggleAccordion ? "active" : ""}`}>
                {title}
                { !toggleAccordion &&
                    <div>
                        +
                    </div>
                }
                { toggleAccordion &&
                    <div>
                        -
                    </div>
                }
            </AccordionContent>
            <AccordionDetails className={`${toggleAccordion ? "active" : ""}`}>
                <div className="accordion-content-spacing">{content}</div>
            </AccordionDetails>
        </AccordionContainer>
    )
}
export default Accordion