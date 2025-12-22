"use client"

import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function Scroll_Behavior_Polyfill() {
  useEffect(() => {
    //console.log("Triggering polyfill");
    smoothscroll.polyfill();
    //console.log("Polyfill triggered");
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component doesn't render anything, it just applies the polyfill
};