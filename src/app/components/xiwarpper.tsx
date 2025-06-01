
"use client";

import dynamic from "next/dynamic";
const Xianimation = dynamic(() => import("./xianimation"), {
  ssr: false,
});

export default function Wrapper() {
  return <Xianimation />;
}
