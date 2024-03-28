"use client";

import Image from "next/image";

import { Button } from "@nextui-org/react";
import Alarm from "../component/ui/alarm";
import Aboutofcontect from "../component/ui/about-of-content";
import Zonicsign from "../component/ui/zonic-sign";
import { Dateofbath } from "../component/ui/date-of-bath";
import Gender from "../component/ui/gender";
import Age from "../component/ui/age";
import Name from "../component/ui/name-input";

export default function Home() {
  return (
    <div className=" mt-20">
      <div className="border mx-96 px-10 py-5 shadow-xl rounded-2xl">
        <div className=" flex justify-between text-xl font-bold mb-8">
          <p>Price : 50000 KYAT</p>
          <p>Processing Time : 3 - 5 Days</p>
        </div>
        <div className="">
          <p className=" text-[#f90] text-justify">
            မှတ်ချက်။ ။ ဗေဒင်ဟောစာတမ်းများကို တိကျမှန်စွာကန်စွာ
            သုံသပ်နိုင်ရန်အတွက် မိတ်ဆွေတို့ရဲ့ကိုယ်ရေးအချက်အလက်များကို
            တိကျမှန်ကန်စွာရေးသွင်းရန် အထူးလိုအပ်ပါသည်။
            မိမိတို့၏ကိုယ်ရေးအချက်အလက်များ မှားယွင်းမှုကြောင့် ဖြစ်ပေါ်လာမည့်
            ဟောစာတမ်းအမှားများအတွက် StarLight Astrology မှ တာဝန်ယူမည်မဟုတ်ပါ။
          </p>
        </div>
        <div className=" mt-5">
          <Name />
          <div className="flex gap-4">
            <Gender />
            <Age />
          </div>
          <div className=" flex gap-4">
            <Dateofbath />
            <Zonicsign />
          </div>
          <Aboutofcontect />
          <Alarm />
          <div className=" mt-6 my-3">
            <Button className=" bg-yellow-400 w-full">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
