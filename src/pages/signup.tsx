import Image from "next/image";
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
      <div className="signin w-3/12 bg-white border border-gray-400 text-center">
        <div className="p-5">
          <Image src="/logo.svg" alt="logo" width={200} height={80}></Image>
          <hr />
          <div className="p-10">
            <form onSubmit={handleSignup}>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border border-gray-200 py-2 px-3 mb-3"
                placeholder="メールアドレス"
              />
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                className="border border-gray-200 py-2 px-3 mb-3"
                placeholder="ユーザーネーム"
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
