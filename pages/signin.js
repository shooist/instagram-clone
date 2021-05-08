import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../src/contexts/AuthContexts";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useContext(AuthContext);

  const handleSignin = async (event) => {
    event.preventDefault();
    signin(email, password, history);
  };

  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin w-3/12 bg-white border border-gray-400 text-center">
        <div className="p-5">
          <Image src="/logo.svg" alt="logo" width={200} height={80}></Image>
          <hr />
          <div className="p-10">
            <form onSubmit={handleSignin}>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border border-gray-200 py-2 px-3 mb-3"
                placeholder="メールアドレス"
              />
              <input
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="border border-gray-200 py-2 px-3 mb-3"
                placeholder="パスワード"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                メールアドレスでログイン
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="tosignup w-3/12 bg-white border border-gray-400 text-center mt-5 p-5">
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
