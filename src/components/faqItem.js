import React, { useRef } from "react";

export const AccordionItem = ({ faqItem, onClick, onMouseOver, onMouseLeave, isOpen, isHover, num, }) => {
  const itemRef = useRef(null);

  return (
    <li className={`accordion-item`} onMouseOver={() => onMouseOver()} onMouseLeave={() => onMouseLeave()}> 
      <button className={`accordion-header ${isOpen ? "active" : ""}`} onClick={() => onClick()}>
        <div className="number">{num}</div>
        <h2>{faqItem.q}</h2>
        <div className={`accordion-arrow ${isOpen ? "active" : ""}`}><span class={`${isOpen ? "label-icon_white" : isHover ? "label-icon_hover" : "label-icon"}`}></span></div>
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight + 40 } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.a.map(el => (
            <p dangerouslySetInnerHTML={{ __html: el }}></p>
          ))}
        </div>
      </div>
    </li>
  );
};