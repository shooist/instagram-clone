import { NextPage } from "next";

export const Story: NextPage = () => {
  return (
    <div className="stories bg-white p-5 rounded border border-gray-400 flex mb-6">
      <div className="storie-item flex flex-col mr-6">
        <div className="rounded-full p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="rounded-full bg-white wrapper overflow-hidden h-16 w-16">
            <img
              src="profileIcon.png"
              className="-full h-full object-contain p-2 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="user-name text-center pt-1">
          <span className="text-gray-700 text-sm">apple</span>
        </div>
      </div>
      <div className="storie-item flex flex-col mr-6">
        <div className="rounded-full p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="rounded-full bg-white wrapper overflow-hidden h-16 w-16">
            <img
              src="profileIcon.png"
              className="-full h-full object-contain p-2 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="user-name text-center pt-1">
          <span className="text-gray-700 text-sm">google</span>
        </div>
      </div>
    </div>
  );
};
