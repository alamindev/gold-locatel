import { useEffect, useRef, useState } from "react";
import "./accordion.css";

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      requestAnimationFrame(() => {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      });
    }
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div className="accordion-sub">
        <button className="accordion-header" onClick={onToggle}>
          <span>{title}</span>
        </button>
        <div
          className="accordion-content"
          ref={contentRef}
          style={{
            height: height, // Use state-controlled height
          }}
        >
          <div className="content-text">{content}</div>
        </div>
      </div>
      <button type="button" onClick={onToggle} className="toggle-icon">
        {isOpen ? "−" : "+"}
      </button>
    </div>
  );
};

export default Accordion;
