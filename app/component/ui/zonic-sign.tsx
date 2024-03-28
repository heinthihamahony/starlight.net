"use client";

import React from "react";
export const zonic = [
  {
    label: "Aries",
    value: "Aries",
    description: "March 21 to April 19",
  },
  {
    label: "Taurus",
    value: "Taurus",
    description: "April 20 to May 20",
  },
  {
    label: "Gemini",
    value: "Gemini",
    description: "May 21 to June 20",
  },
  { label: "Cancer", value: "Cancer", description: "June 21 to July 22" },
  { label: "Leo", value: "Leo", description: "July 23 to Aug 22" },
  {
    label: "Virgo",
    value: "Virgo",
    description: "Aug 23 to Sep 22",
  },
  {
    label: "Libra",
    value: "Libra",
    description: "Sep 23 to Oct 22",
  },
  {
    label: "Scorpic",
    value: "Scorpic",
    description: "Oct 23 to Nov 21",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Sagittarius",
    value: "Sagittarius",
    description: "Nov 22 to Dec 21",
  },
  {
    label: "Capricorn",
    value: "Capricorn",
    description: "Dec 22 to Jan 19",
  },
  {
    label: "Aquarius",
    value: "Aquarius",
    description: "Jan 20 to Feb 18",
  },
  {
    label: "Pisces",
    value: "Pisces",
    description: "Feb 19 to March 20",
  },
];

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Zonicsign() {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className="w-full flex flex-col ">
      <p className=" mt-3 mb-1">
        Select your Sign <span className=" text-red-500">*</span>
      </p>
      <div className="flex w-[286px] flex-wrap md:flex-nowrap mb-6 md:mb-0">
        <Autocomplete
          defaultItems={zonic}
          label="Select your Sing"
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
