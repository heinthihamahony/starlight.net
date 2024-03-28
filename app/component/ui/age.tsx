import React from "react";
import { Input } from "@nextui-org/react";

export default function Age() {
  return (
    <div className="mt-3">
      <div className="w-[286px] flex-wrap md:flex-nowrap">
        <p className="mb-1">
          Age <span className=" text-red-500">*</span>
        </p>
        <Input type="email" label="Type your age" />
      </div>
    </div>
  );
}
