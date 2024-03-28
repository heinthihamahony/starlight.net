import Image from "next/image";
import Password from "../component/ui/password";
import Email from "../component/ui/email";
import Buttondark from "../component/ui/sign-in-button";
import Buttonsignin from "../component/ui/sign-in-button";

export default function Home() {
  return (
    <div className="">
      <div className=" flex justify-center">
        <div className=" border p-10 rounded-2xl shadow-xl">
          <div className="">
            <p className=" mb-1">Email</p>
            <Email />
          </div>
          <div className=" my-5">
            <p className=" mb-1">Password</p>
            <Password />
          </div>
          <div className=" text-end">
            <a className=" hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
          <Buttonsignin />
          <div className=" text-center items-center">
            <p className=" my-5">Or Log In with</p>
            <div className=" flex justify-center gap-8">
              <a href="#">
                <img
                  className=" w-5 rounded-full"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className=" w-5 rounded-full"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className=" w-5 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpvTWFaJ9Tq_Rq0Hl9ASAdE-YylaEBjSR-g&usqp=CAU"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
