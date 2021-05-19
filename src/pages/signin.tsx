import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SigninForm } from "src/components/separate/form/SigninForm";

const Signin: NextPage = () => {
  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin container max-w-sm bg-white border border-gray-400 text-center">
        <div className="p-4 md:p-8">
          <Link href="/">
            <a>
              <Image
                src="/assets/img/logo.svg"
                alt="logo"
                width={200}
                height={80}
              ></Image>
            </a>
          </Link>
          <hr />
          <div className="pt-10">
            <SigninForm />
          </div>
        </div>
      </div>
      <div className="tosignup container max-w-sm bg-white border border-gray-400 text-center mt-5 p-5">
        <Link href="/signup">
          <a className="font-bold text-blue-500 cursor-pointer">
            アカウントを登録する
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
