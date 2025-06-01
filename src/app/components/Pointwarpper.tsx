
"use client";

import dynamic from "next/dynamic";
const Pointwrapper = dynamic(() => import("./Point"), {
  ssr: false,
});

export default function Wrapper() {
  return <Pointwrapper />;
}
