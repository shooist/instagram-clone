import Image from "next/image";
import Link from "next/link";
import { SignupForm } from "src/components/separate/form/SignupForm";

const Signup = () => {
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
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
