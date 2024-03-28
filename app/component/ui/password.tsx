import React from "react";
import { Input } from "@nextui-org/react";

export default function Password() {
  return (
    <div className="flex w-80 flex-wrap md:flex-nowrap gap-4">
      <Input type="password" label="Enter your password" />
    </div>
  );
}
