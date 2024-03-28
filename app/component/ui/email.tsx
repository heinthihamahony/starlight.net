import React from "react";
import { Input } from "@nextui-org/react";

export default function Email() {
  return (
    <div className="flex w-80 flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Enter your email" />
    </div>
  );
}
