import {useState} from "react";
import "./Accordion.css"

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
        <div className={"mobile-accordion" + classNameString} onClick={() => setToggleAccordion(!toggleAccordion)}>
            <div className={`mobile-accordion-content ${toggleAccordion ? "active" : ""}`}>
                {title}
                { !toggleAccordion &&
                    <div className="mobile-accordion-plus">
                        +
                    </div>
                }
                { toggleAccordion &&
                    <div className="mobile-accordion-minus">
                        -
                    </div>
                }
            </div>
            <div className={`mobile-accordion-details ${toggleAccordion ? "active" : ""}`}>
                {content}
            </div>
        </div>
    )
}
export default Accordion