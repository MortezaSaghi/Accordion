import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// ------------- Data for Accordion
import {Data} from "./../../public/data/Data"

// --------------  Accordion Two Component

const AccordionTwo = () => {
    const [open,setOpen]=useState(null);
  return (
    <div className="accordion">
      {Data.map((item) => (
        <AccordionItem key={item.id} item={item} open={open} setOpen={setOpen} />
      ))}
    </div>
  )
}

export default AccordionTwo

//-------------- Accordion Item Component

export const AccordionItem = ({ item ,open ,setOpen }) => {
    let isOpen=item.id===open;
  return (
    <div className={`accordion-item ${isOpen?"accordion__expanded":""}`}>
      <div className={`accordion-item__header `} onClick={()=>setOpen(item.id===open?null:item.id)}>
        <div>{item.titel}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
};