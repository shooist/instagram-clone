import Image from "next/image";
import { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { FeedItemSkeleton } from "src/components/FeedItemSkeleton";
import toast from "react-hot-toast";
import { formatDistanceToNowStrict } from "date-fns";
import { Article } from "src/API";

type FeedItemProp = { item: Article };

export const FeedItem: React.VFC<FeedItemProp> = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  const alertNotImplemented = () => {
    toast("こちらの機能は準備中です...");
  };
  const getImageUrl = async () => {
    const url = (await Storage.get(props.item.imageUrl, {
      // level: "protected",
      expires: 86400,
    })) as string;
    setImageUrl(url);
    // console.log("url : ", url);
  };
  useEffect(() => {
    getImageUrl();
  }, []);

  if (imageUrl === "") return <FeedItemSkeleton />;

  return (
    <div className="feed-wrapper mb-4">
      <div className="feed-item bg-white">
        <div className="feed-header border-b p-4 flex justify-between items-center">
          <div className="left flex flex-row items-center">
            <div className="user-img h-10 w-10 border rounded-full overflow-hidden mr-4">
              <Image src="/assets/img/profileIcon.png" alt="user-avatar" draggable="false" width={38} height={38} />
            </div>
            <div className="user-name-and-place flex flex-col">
              <span className="text-sm font-bold">{props.item.user?.name}</span>
              <span className="text-xs font-light text-gray-900">Chiapas, Mexico</span>
            </div>
          </div>
          <div className="right cursor-pointer" onClick={alertNotImplemented}>
            <Image src="/assets/img/iconMore.svg" alt="more" width={24} height={24} />
          </div>
        </div>
        <div className="feed-body">
          <Image src={imageUrl} alt="" className="w-full object-contain" width={1280} height={1280} />
        </div>
        <div className="feed-footer p-4">
          <div className="top">
            <div className="icons flex flex-row justify-between items-center">
              <div className="left flex flex-row items-center">
                <div className="like mr-4 cursor-pointer inline-flex" onClick={alertNotImplemented}>
                  <Image src="/assets/img/iconLike.svg" alt="like" width={24} height={24} />
                </div>
                <div className="comment mr-4 cursor-pointer inline-flex" onClick={alertNotImplemented}>
                  <Image src="/assets/img/iconComment.svg" alt="comment" width={24} height={24} />
                </div>
                <div className="share cursor-pointer inline-flex" onClick={alertNotImplemented}>
                  <Image src="/assets/img/iconDM.svg" alt="share" width={24} height={24} />
                </div>
              </div>
              <div className="right flex items-center cursor-pointer">
                <div className="save inline-flex" onClick={alertNotImplemented}>
                  <Image src="/assets/img/iconSave.svg" alt="save" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="likes mt-1">
              <span className="font-bold text-sm">122,780 人が「いいね！」しました</span>
            </div>
            <div className="caption text-sm mt-3">
              <b>{props.item.author}</b>
              {props.item.caption}
            </div>
            <div className="post-date mt-1">
              <span className="text-xs text-gray-900">
                {formatDistanceToNowStrict(new Date(props.item.createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
          <div className="bottom border-t pt-3 mt-3">
            <div className="wrapper flex">
              <input
                type="text"
                className="text-sm h-10 w-full outline-none focus:outline-none"
                placeholder="コメントを送信..."
              />
              <button
                className="text-blue-500 text-center opacity-75 w-4/12 md:w-2/12 font-bold cursor-pointer"
                onClick={alertNotImplemented}
              >
                投稿する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
