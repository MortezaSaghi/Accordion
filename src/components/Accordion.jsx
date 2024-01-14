import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// ------------- Data for Accordion
import {Data} from "./../../public/data/Data"

// --------------  Accordion Component

const Accordion = () => {
  return (
    <div className="accordion">
      {Data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;

//-------------- Accordion Item Component

export const AccordionItem = ({ item }) => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <div className={`accordion-item ${isOpen?"accordion__expanded":""}`}>
      <div className={`accordion-item__header `} onClick={()=>setIsOpen(preState=>!preState)}>
        <div>{item.titel}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
};
