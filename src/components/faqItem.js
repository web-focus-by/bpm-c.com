import React, { useRef } from "react";

export const AccordionItem = ({ faqItem, onClick, isOpen, num }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className={`accordion-header ${isOpen ? "active" : ""}`} onClick={() => onClick()}>
        <div className="number">{num}</div>
        <p>{faqItem.q}</p>
        <div className={`accordion-arrow ${isOpen ? "active" : ""}`}><span class={`${isOpen ? "label-icon_white" : "label-icon"}`}></span></div>
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight + 40 } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.a.map(el => (
            <p>{el}</p>
          ))}
        </div>
      </div>
    </li>
  );
};