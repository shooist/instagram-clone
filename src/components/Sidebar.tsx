import React, { useContext } from "react";
import { NextPage } from "next";
import { AuthContext } from "src/contexts/AuthContext";

export const Sidebar: NextPage = () => {
  const { currentUser } = useContext(AuthContext);
  let hoge = "未ログイン";
  if (currentUser) {
    hoge = "ログイン中！！！";
  }
  console.log("currentUser : ", currentUser);
  return (
    <div className="right w-4/12 overflow-visible h-full">
      <div className="first fixed pl-4 w-full">
        <div className="profile flex items-center p-3 mb-4">
          <div className="avatar rounded-full overflow-hidden mr-3">
            <img width="56px" height="56px" src="profileIcon.png" alt="" />
          </div>
          <div className="user-name ">
            <span className="text-lg font-semibold text-gray-700">
              user.hoge
            </span>
            <span>{hoge}</span>
            {/* <span className="text-sm text-gray-600  block">Ugraphics</span> */}
          </div>
        </div>
        <div className="suggestion-users">
          <div className="title flex w-full justify-between text-sm">
            <div className="left">
              <h1 className="font-bold">おすすめ</h1>
            </div>
            <div className="right">
              <span>See All</span>
            </div>
          </div>

          <div className="users-wrapper mt-4 flex w-full justify-between items-center">
            <div className="user-item flex flex-row pl-2">
              <div className="user-img h-10 w-10 border rounded-full overflow-hidden mr-4">
                <img
                  alt="realdonaldtrump's profile picture"
                  className=""
                  src="profileIcon.png"
                />
              </div>
              <div className="user-name flex flex-col ">
                <span className="text-sm font-semibold">user.foo</span>
                <span className="text-xs -mt-1 text-gray-700">
                  user.hogeがフォロー中
                </span>
              </div>
            </div>
            <a href="" className="follow text-blue-600 text-sm font-semibold">
              follow
            </a>
          </div>

          <div className="users-wrapper mt-4 flex w-full justify-between items-center">
            <div className="user-item flex flex-row pl-2">
              <div className="user-img h-10 w-10 border rounded-full overflow-hidden mr-4">
                <img
                  alt="shinzoabe's profile picture"
                  className="_6q-tv"
                  data-testid="user-avatar"
                  draggable="false"
                  src="profileIcon.png"
                />
              </div>
              <div className="user-name flex flex-col ">
                <span className="text-sm font-semibold">user.foo</span>
                <span className="text-xs -mt-1 text-gray-700">
                  user.hogeがフォロー中
                </span>
              </div>
            </div>
            <a href="" className="follow text-blue-600 text-sm font-semibold">
              follow
            </a>
          </div>

          <div className="users-wrapper mt-4 flex w-full justify-between items-center">
            <div className="user-item flex flex-row pl-2">
              <div className="user-img h-10 w-10 border rounded-full overflow-hidden mr-4">
                <img
                  alt="nike's profile picture"
                  className="_6q-tv"
                  data-testid="user-avatar"
                  draggable="false"
                  src="profileIcon.png"
                />
              </div>
              <div className="user-name flex flex-col ">
                <span className="text-sm font-semibold">user.foo</span>
                <span className="text-xs -mt-1 text-gray-700">
                  user.hogeがフォロー中
                </span>
              </div>
            </div>
            <a href="" className="follow text-blue-600 text-sm font-semibold">
              follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
