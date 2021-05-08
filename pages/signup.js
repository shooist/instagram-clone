import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { signupUserWithEmailAndPassword } from "../src/firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  /**
   *
   * @param {Event} event
   */
  const signup = async (event) => {
    try {
      event.preventDefault();
      console.log("email : ", email);
      console.log("password : ", password);
      console.log("userName : ", userName);
      const result = await signupUserWithEmailAndPassword(email, password);
      if (result) {
        // create Success
        console.log("hoge");
        // var user = firebase.auth().currentUser;
        result.user.updateProfile({
          displayName: userName,
          // photoURL: "https://example.com/jane-q-user/profile.jpg",
        });
        console.log(result);
        // RedirectTo("/");
        router.push("/");
      } else {
        // create Failed
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin w-3/12 bg-white border border-gray-400 text-center">
        <div className="p-5">
          <Image src="/logo.svg" alt="logo" width={200} height={80}></Image>
          <hr />
          <div className="p-10">
            <form onSubmit={signup}>
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
