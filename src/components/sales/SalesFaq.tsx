"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function SalesFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`sales-faq-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="sales-faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {item.question}
              <span className="arr" aria-hidden="true">
                +
              </span>
            </button>
            {isOpen ? <div className="sales-faq-a">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
