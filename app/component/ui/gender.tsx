"use client";

import React from "react";
export const gender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Gender() {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className="w-full flex flex-col">
      <p className=" mt-3 mb-1">
        Select your Gender <span className=" text-red-500">*</span>
      </p>
      <div className="flex w-[286px] flex-wrap md:flex-nowrap mb-6 md:mb-0">
        <Autocomplete
          defaultItems={gender}
          label="Select your Gender"
          className="max-w-xs"
        >
          {(item) => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </div>
  );
}
