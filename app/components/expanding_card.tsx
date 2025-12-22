"use client"

import { Open_Selected_Card_Details } from "../lib/card_expansion.js";

// Define the interface
interface ExpandingCardProps {
  title: string;
  body: string;
}

export default function Expanding_Card({ title, body }: ExpandingCardProps) {
  return (
    <div className="card selectable-card" onClick={(event) => Open_Selected_Card_Details(event, (title.replaceAll(" ", "_") + "_Expansion_Content"))}>
        <h3 className="text-lg m-0">{title}</h3>
        <p className="mt-2">{body}</p>
    </div>
  );
}

