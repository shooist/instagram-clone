import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { MessageContext } from "src/contexts/MessageContext";
import { AuthContext } from "src/contexts/AuthContext";

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
              <h1 className="font-bold text-xl w-32">
                <img src="/assets/img/logo.svg" alt="instagram logo" />
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
            <a>
              <div className="home-icon mr-6">
                <img src="/assets/img/iconHome.svg" alt="home" />
              </div>
            </a>
          </Link> */}
          <div
            className="dm-icon mr-6 cursor-pointer"
            onClick={alertNotImplemented}
          >
            <img src="/assets/img/iconDM.svg" alt="dm" />
          </div>
          <div
            className="compas-icon mr-6 cursor-pointer"
            onClick={alertNotImplemented}
          >
            <img src="/assets/img/iconCompas.svg" alt="compas" />
          </div>
          <div
            className="like-icon mr-6 cursor-pointer"
            onClick={alertNotImplemented}
          >
            <img src="/assets/img/iconLike.svg" alt="like" />
          </div>
          {currentUser ? (
            <div className="hover-trigger relative">
              <div className="profile-icon h-6 w-6 border rounded-full overflow-hidden cursor-pointer">
                <img
                  alt="u__graphics's profile picture"
                  className="_6q-tv"
                  data-testid="user-avatar"
                  draggable="false"
                  src="/assets/img/profileIcon.png"
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
              <a>
                <div className="profile-icon h-6 w-6 border rounded-full overflow-hidden">
                  <img
                    alt="u__graphics's profile picture"
                    className="_6q-tv"
                    data-testid="user-avatar"
                    draggable="false"
                    src="/assets/img/profileIcon.png"
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
