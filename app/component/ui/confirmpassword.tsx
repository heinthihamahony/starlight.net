import React from "react";
import { Input } from "@nextui-org/react";

export default function Confirmpassword() {
  return (
    <div className="flex w-80 flex-wrap md:flex-nowrap gap-4">
      <Input type="password" label="Confirm your password" />
    </div>
  );
}
