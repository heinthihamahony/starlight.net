import React from "react";
import { Textarea } from "@nextui-org/react";

export default function Aboutofcontect() {
  return (
    <div className=" mt-3">
      <p className=" mb-1">
        About Of Content <span className=" text-red-500">*</span>
      </p>
      <Textarea
        isRequired
        label=""
        labelPlacement="outside"
        placeholder="Enter your problem"
        className=""
      />
    </div>
  );
}
