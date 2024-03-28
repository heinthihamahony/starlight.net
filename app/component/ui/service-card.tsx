import Buttoncontinue from "./buttoncontinue";

export default function Servicecard({ service }: any) {
  return (
    <div className=" border p-6 rounded-2xl shadow-xl">
      <img className="w-full rounded-xl" src={service.image} alt="" />
      <p className=" font-bold text-2xl my-5">{service.title}</p>
      <p>{service.description}</p>
      <div className=" flex justify-between items-center ">
        <p className="font-bold text-xl mt-4 ">{service.price} Kyats</p>
        <Buttoncontinue />
      </div>
    </div>
  );
}
