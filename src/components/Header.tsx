import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "src/contexts/MessageContext";
import { AuthContext } from "src/contexts/AuthContext";
import Image from "next/image";

export const Header: NextPage = () => {
  const { currentUser, signout } = useContext(AuthContext);
  const { outputMessage } = useContext(MessageContext);

  const handleSignout = async () => {
    signout();
  };
  const alertNotImplemented = () => {
    outputMessage("こちらの機能は準備中です...");
  };

  return (
    <nav className="border-b py-3 sticky top-0 bg-white z-50">
      <div className="container px-3 mx-auto flex justify-between">
        <div className="logo">
          <Link href="/">
            <a>
              <h1 className="flex items-center font-bold text-xl w-32">
                <Image
                  src="/assets/img/logo.svg"
                  alt="instagram logo"
                  className="inline-flex"
                  width={128}
                  height={46}
                />
              </h1>
            </a>
          </Link>
        </div>
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="検索"
            className="border px-1 text-sm bg-gray-200 rounded-sm"
          />
        </div> */}
        <div className="icons flex items-center">
          {/* <Link href="/">
            <a className="inline-flex">
              <div className="home-icon mr-6 cursor-pointer inline-flex">
                <Image
                  src="/assets/img/iconHome.svg"
                  alt="home"
                  width={24}
                  height={24}
                />
              </div>
            </a>
          </Link> */}
          <div
            className="dm-icon mr-6 cursor-pointer inline-flex"
            onClick={alertNotImplemented}
          >
            <Image
              src="/assets/img/iconDM.svg"
              alt="dm"
              width={24}
              height={24}
            />
          </div>
          <div
            className="compas-icon mr-6 cursor-pointer inline-flex"
            onClick={alertNotImplemented}
          >
            <Image
              src="/assets/img/iconCompas.svg"
              alt="compas"
              width={24}
              height={24}
            />
          </div>
          <div
            className="like-icon mr-6 cursor-pointer inline-flex"
            onClick={alertNotImplemented}
          >
            <Image
              src="/assets/img/iconLike.svg"
              alt="like"
              width={24}
              height={24}
            />
          </div>
          {currentUser ? (
            <div className="hover-trigger relative flex items-center">
              <div className="profile-icon h-6 w-6 border rounded-full overflow-hidden cursor-pointer inline-flex">
                <Image
                  alt="u__graphics's profile picture"
                  className="_6q-tv"
                  data-testid="user-avatar"
                  draggable="false"
                  src="/assets/img/profileIcon.png"
                  width={24}
                  height={24}
                />
              </div>
              <div className="hover-target absolute bg-white border border-gray-100 w-36 transform -right-2">
                <ul className="">
                  <li className=" hover:bg-gray-200">
                    <Link href="/post">
                      <a className="px-6 py-3 block">投稿する</a>
                    </Link>
                  </li>
                  <li className=" hover:bg-gray-200">
                    <button onClick={handleSignout} className="px-6 py-3">
                      ログアウト
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/signin">
              <a className="inline-flex">
                <div className="profile-icon h-6 w-6 border rounded-full overflow-hidden inline-flex">
                  <Image
                    alt="u__graphics's profile picture"
                    className="_6q-tv"
                    data-testid="user-avatar"
                    draggable="false"
                    src="/assets/img/profileIcon.png"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
