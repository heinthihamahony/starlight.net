import React from "react";
import { Input } from "@nextui-org/react";

export default function Name() {
  return (
    <div className="">
      <div className="flex gap-4">
        <div className="w-full flex-wrap md:flex-nowrap">
          <p className="mb-1">
            First Name <span className=" text-red-500">*</span>
          </p>
          <Input type="email" label="First Name" />
        </div>
        <div className="w-full flex-wrap md:flex-nowrap">
          <p className="mb-1">
            Last Name <span className=" text-red-500">*</span>
          </p>
          <Input type="email" label="Last Name" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
