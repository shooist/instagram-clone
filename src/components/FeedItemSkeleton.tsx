import type { FC } from "react";

export const FeedItemSkeleton: FC = () => {
  return (
    <div className="feed-wrapper mb-4">
      <div className="feed-item border border-gray-400 rounded bg-white">
        <div className="feed-header border-b p-4 flex justify-between items-center">
          <div className="left flex flex-row items-center">
            <div className="user-img h-10 w-10 border rounded-full overflow-hidden mr-4 bg-gray-200 animate-pulse"></div>
            <div className="user-name-and-place flex flex-col">
              <div className="text-sm font-bold h-4 w-52 bg-gray-200 animate-pulse"></div>
              <div className="text-xs font-light mt-1 h-4 w-52 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
          <div className="right cursor-pointer"></div>
        </div>
        <div className="feed-body aspect-w-1 aspect-h-1 bg-gray-200 animate-pulse"></div>
        <div className="feed-footer p-4">
          <div className="top">
            <div className="icons flex flex-row justify-between items-center">
              <div className="left flex flex-row">
                <div className="like mr-4 cursor-pointer w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="comment mr-4 cursor-pointer w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="share cursor-pointer w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
              </div>
              <div className="right cursor-pointer w-6 h-6 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="likes mt-2">
              <div className="font-bold text-sm w-32 h-4 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="caption text-sm mt-2 w-36 h-4 bg-gray-200 animate-pulse"></div>
            <div className="post-date mt-2">
              <div className="text-xs text-gray-900 w-32 h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
          <div className="bottom border-t pt-3 mt-3">
            <div className="wrapper flex">
              <input
                type="text"
                className="text-sm h-10 w-full outline-none focus:outline-none"
              />
              <button className="w-2/12 text-right font-bold cursor-pointer h-10 bg-gray-200 animate-pulse"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
