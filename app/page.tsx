import Image from "next/image";
import Buttoncontinue from "./component/ui/buttoncontinue";
import Servicecard from "./component/ui/service-card";

const services = [
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/pPa8l21xrcnpXyKi1mWwkrVTHfbZHQUXHzT5TV15.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အချစ်ရေး နှင့် အိမ်ထောင်ရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "အချစ်ရေးနှင့် ပက်သက်သော အကြောင်းအရာကိစ္စများ၊ အိမ်ထောင်ရေးနှင့ ပက်သက်သော အကြောင်းအရာကိစ္စများကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/pPa8l21xrcnpXyKi1mWwkrVTHfbZHQUXHzT5TV15.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အချစ်ရေး နှင့် အိမ်ထောင်ရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "အချစ်ရေးနှင့် ပက်သက်သော အကြောင်းအရာကိစ္စများ၊ အိမ်ထောင်ရေးနှင့် ပက်သက်သော အကြောင်းအရာကိစ္စများကို  ပညာရှင် ၃ ဦးမှ   အသေးစိတ် စုပေါင်း သုံ...",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/FVVINtYuxJ5ZMFbBRTEksw5UVivXPjzI6OHgyJfK.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ပညာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ ",
    description:
      "စာမေးပွဲဖြေဆိုခြင်း၊ နိုင်ငံခြား ကျောင်းလျောက်ခြင်း၊ ကျောင်းဗီဇာလျောက်ခြင်း၊ ပညာသင်ဆုလျောက်ခြင်း၊ ဘွဲ့ထူး ဂုဏ်ထူးရရှိခြင်း အစရှိသည့် ပညာရေးနှင့် သက်ဆိုင်သောကိစ္စများကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/FVVINtYuxJ5ZMFbBRTEksw5UVivXPjzI6OHgyJfK.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ပညာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်းသုံးသပ်ပေးပါမည်။)",
    description:
      "စာမေးပွဲဖြေဆိုခြင်း၊ နိုင်ငံခြား ကျောင်းလျောက်ခြင်း၊ ကျောင်းဗီဇာလျောက်ခြင်း၊ ပညာသင်ဆုလျောက်ခြင်း၊ ဘွဲ့ထူး ဂုဏ်ထူးရရှိခြင်း အစရှိသည့် ပညာရေးနှင့် သက်ဆိုင်သောကိစ္စများကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြ...",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/IFYTqIaoWveM9NIHGRvQL1T3A6228haC4cMxlFtt.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် နိုင်ငံခြား နှင့် ခရီးသွားလာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "ပြည်တွင်း ပြည်ပ ခရီးသွားလာခြင်း၊ နိုင်ငံခြားတွင် ပြောင်းရွှေ့ အခြေချနေထိုင်ခြင်း၊ Immigration ကိစ္စရပ်များ၊ ဗီဇာလျောက်ထားခြင်း အစရှိသည့် ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပ...",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/IFYTqIaoWveM9NIHGRvQL1T3A6228haC4cMxlFtt.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် နိုင်ငံခြား နှင့် ခရီးသွားလာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "ပြည်တွင်း ပြည်ပ ခရီးသွားလာခြင်း၊ နိုင်ငံခြားတွင် ပြောင်းရွှေ့ အခြေချနေထိုင်ခြင်း၊ Immigration ကိစ္စရပ်များ၊ ဗီဇာလျောက်ထားခြင်း အစရှိသည့် ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပ...",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/nUL80qusnl0Kie5btiMULnz0tFU2y5m7ixLdXfh6.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အလုပ်အကိုင် ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "အလုပ်အကိုင်လျောက်ထားခြင်း၊ အင်တာဗျူးဖြေဆိုခြင်း၊ ရာထူး လစာ တိုးခြင်း၊ အလုပ်နေရာပြောင်းရွှေ့ခြင်း အစရှိသည့် အလုပ်အကိုင်နှင့် သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/nUL80qusnl0Kie5btiMULnz0tFU2y5m7ixLdXfh6.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အလုပ်အကိုင် ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦးအထိ စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "အလုပ်အကိုင်လျောက်ထားခြင်း၊ အင်တာဗျူးဖြေဆိုခြင်း၊ ရာထူး လစာ တိုးခြင်း၊ အလုပ်နေရာပြောင်းရွှေ့ခြင်း အစရှိသည့် အလုပ်အကိုင်နှင့် သက်ဆိုင်သော  ကိစ္စ ရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေး...",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/ylBXe7Ffru0qCd35zXkl24yYLp5xU9gFvRaKj2td.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ချမ်းသာခြင်း နှင့် ဝင်ငွေရလမ်း ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "အောင်မြင် ကြီးပွားတိုးတက်ခြင်း၊ ချမ်းသာခြင်း၊ ၀င်ငွေရပေါက်ရလမ်းကိစ္စများ၊ အမွေကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/ylBXe7Ffru0qCd35zXkl24yYLp5xU9gFvRaKj2td.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ချမ်းသာခြင်း နှင့် ဝင်ငွေရလမ်း ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "အောင်မြင် ကြီးပွားတိုးတက်ခြင်း၊ ချမ်းသာခြင်း၊ ၀င်ငွေရပေါက်ရလမ်းကိစ္စများ၊ အမွေကိစ္စ  ရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ်စုပေါင်း တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/59Ll5kULj2BIRl1hDD9IWUr4QTl6SzcsLR8UqEtD.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် သားသမီး နှင့် မိသားစု အရေးကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "သား၊ သမီးများနှင့် ပက်သက်သော အရေးကိစ္စများ၊ မိသားစုနှင့် ပက်သက်သော အရေးကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/DrHq2NomUVzmzMT6SYc69DaHEVM2n9hBOIulYEGa.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် သားသမီး နှင့် မိသားစု အရေးကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "သား၊ သမီးများနှင့် ပက်သက်သော အရေးကိစ္စများ၊ မိသားစုနှင့် ပက်သက်သော အရေးကိစ္စရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ်စုပေါင်း တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/6hPqUMApLAhO5hUhENdNrC26jXSAwxf62K0EZIYW.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ကျန်းမာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "ရောဂါဝေဒနာ ခံစားရခြင်း၊  ခွဲစိတ်ကုသခြင်း၊ ဆေးရုံတက်ခြင်း အစရှိသည့် ကျန်းမာရေးနှင့် သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/thGaq1vG3dkQLKICbKsy4ldCn7q51TYs5iWYbGuM.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ကျန်းမာရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "ရောဂါဝေဒနာ ခံစားရခြင်း၊  ခွဲစိတ်ကုသခြင်း၊ ဆေးရုံတက်ခြင်း အစရှိသည့် ကျန်းမာရေးနှင့် သက်ဆိုင်သော ကိစ္စရပ်များကို ပညာရှင် ၃  ဦးမှ  အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/vTDHEW2nhZWj6Jbgc2ahSjzbCKWarhO3jiNS3h3U.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် လူမှုရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "သာရေး၊ နာရေး၊ လူမှုရေးအခက်အခဲ ကိစ္စရပ်များနှင့်ပက်သက်၍ သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/vTDHEW2nhZWj6Jbgc2ahSjzbCKWarhO3jiNS3h3U.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် လူမှုရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "သာရေး၊ နာရေး၊ လူမှုရေးအခက်အခဲ ကိစ္စရပ်များနှင့်ပက်သက်၍ သက်ဆိုင်သော ကိစ္စရပ်များကို ပညာရှင် ၃  ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက်ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/p3rJ1osS2P3WbvLeiVNROFXXubaIe1XjU985vi4N.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ပိုင်ဆိုင်မှု ကိစ္စများအတွက် အသေးစိတ်တွက်ချက်ပေးခြင်း။",
    description:
      "အိုးအိမ်တိုက်တာ၊ အဆောက်အဦး၊ စက်ပစ္စည်း၊ ယာဉ်၊ ကား၊ ရွှေငွေ ဥစ္စာပစ္စည်းများ အစရှိသည့် ပိုင်ဆိုင်မှုနှင့်သက်ဆိုင်သော  ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/p3rJ1osS2P3WbvLeiVNROFXXubaIe1XjU985vi4N.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် လူမှုရေး ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "အိုးအိမ်တိုက်တာ၊ အဆောက်အဦး၊ စက်ပစ္စည်း၊ ယာဉ်၊ ကား၊ ရွှေငွေ ဥစ္စာပစ္စည်းများ အစရှိသည့် ပိုင်ဆိုင်မှုနှင့်သက်ဆိုင်သော  ကိစ္စရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/uZ59rDfWQmGp5944L3BUNu9cj1Tz01xutCFFnJc2.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ပစ္စည်းပျောက်၊ လူပျောက် ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "ပစ္စည်းပျောက်၊ လူပျောက်၊ သူခိုး ခိုးခံရခြင်း၊ ဆုံးရှုံးမှုများနှင့် ပက်သက်၍ သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/uZ59rDfWQmGp5944L3BUNu9cj1Tz01xutCFFnJc2.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် ပစ္စည်းပျောက်၊ လူပျောက် ကိစ္စများကို အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်း သုံးသပ်ပေးပါမည်။)",
    description:
      "ပစ္စည်းပျောက်၊ လူပျောက်၊ သူခိုး ခိုးခံရခြင်း၊ ဆုံးရှုံးမှုများနှင့် ပက်သက်၍ သက်ဆိုင်သော ကိစ္စရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/H0bVkGGM5aWvgWX0DGUqKwfrZ4bBkxpTob039wvC.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် တရားရေးကိစ္စများ၊ အမှုအခင်း ကိစ္စများကို အသေးစိတ်တွက်ချက်ပေးခြင်း။",
    description:
      "တရားမမှုများ၊ အမှုအခင်းကိစ္စများ၊ ဖမ်းဆီးချုပ်နှောင်ခံရခြင်း၊ ထောင်ကျခြင်း အစရှိသော တရားရေးနှင့် သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ်များ တွက်ချက်ဟောပြောပေးပါမည်။ ",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/H0bVkGGM5aWvgWX0DGUqKwfrZ4bBkxpTob039wvC.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် တရားရေးကိစ္စများ၊ အမှုအခင်း ကိစ္စများကို အသေးစိတ်တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်းသုံးသပ်ပေးပါမည်။)",
    description:
      "တရားမမှုများ၊ အမှုအခင်းကိစ္စများ၊ ဖမ်းဆီးချုပ်နှောင်ခံရခြင်း၊ ထောင်ကျခြင်း အစရှိသော တရားရေးနှင့် သက်ဆိုင်သော ကိစ္စရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေးပါမည...",
    price: "100,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/HAuXuV9CKArhyQ4AgEW1CV2WaYeYTP8cIjNanm4X.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အခြားကိစ္စတစ်ခုအတွက် အသေးစိတ် တွက်ချက်ပေးခြင်း။",
    description:
      "အထက်ပါ ဝန်ဆောင်မှုများတွင်မပါရှိပဲ ကျန်ရှိနေသော အခြားကိစ္စရပ်များနှင့် ပက်သက်၍ သက်ဆိုင်သော ကိစ္စရပ်များကို အသေးစိတ် တွက်ချက်ဟောပြောပေးပါမည်။",
    price: "50,000",
    href: "",
  },
  {
    id: "hiuyhui",
    image:
      "https://starlightastro.net/storage/service/HAuXuV9CKArhyQ4AgEW1CV2WaYeYTP8cIjNanm4X.png",
    title:
      "မူလဇာတာ နက္ခတ်ဗေဒင်ဖြင့် အခြားကိစ္စတစ်ခုအတွက် အသေးစိတ် တွက်ချက်ပေးခြင်း။ (ပညာရှင် ၃ ဦး စုပေါင်းသုံးသပ်ပေးပါမည်။)",
    description:
      "အထက်ပါ ဝန်ဆောင်မှုများတွင်မပါရှိပဲ ကျန်ရှိနေသော အခြားကိစ္စရပ်များနှင့် ပက်သက်၍ သက်ဆိုင်သော  ကိစ္စရပ်များကို ပညာရှင် ၃ ဦးမှ အသေးစိတ် စုပေါင်းတွက်ချက် ဟောပြောပေးပါမည်။",
    price: "100,000",
    href: "",
  },
];

export default function Home() {
  return (
    <div className=" mx-5">
      <p className=" text-4xl font-bold my-5">Our Serves</p>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Servicecard service={service} />
        ))}
      </div>
    </div>
  );
}
