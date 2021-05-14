import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "src/contexts/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { signup } = useContext(AuthContext);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signup(email, password, history);
  };

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
            <form onSubmit={handleSignup}>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="メールアドレス"
              />
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="ユーザーネーム"
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
                メールアドレスで登録
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
