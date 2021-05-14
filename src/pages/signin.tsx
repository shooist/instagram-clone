import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { AuthContext } from "src/contexts/AuthContext";

const Signin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useContext(AuthContext);

  const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signin(email, password, history);
  };

  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin container max-w-sm bg-white border border-gray-400 text-center">
        <div className="p-4 md:p-8">
          <Image
            src="/assets/img/logo.svg"
            alt="logo"
            width={200}
            height={80}
          ></Image>
          <hr />
          <div className="pt-10">
            <form onSubmit={handleSignin}>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="メールアドレス"
              />
              <input
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="パスワード"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full px-4 py-2 mt-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                メールアドレスでログイン
              </button>
            </form>
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
