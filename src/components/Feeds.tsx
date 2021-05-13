import type { VFC } from "react";
import { FeedItem } from "src/components/FeedItem";
import { FeedItemSkeleton } from "src/components/FeedItemSkeleton";
import { FeedItemType } from "src/types/types";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

const url =
  "https://asia-northeast1-instagram-clone-e2448.cloudfunctions.net/api/articles";
const fetcher = (url) => fetch(url).then((res) => res.json());

export const Feeds: VFC = () => {
  const { data, error } = useSWR<FeedItemType[]>(url, fetcher);

  if (error) {
    // TODO: 検索結果が取得できなかった場合のエラー処理
    return <div>error</div>;
  }

  if (!data) {
    return <FeedItemSkeleton />;
  }

  const items = data["messages"];
  console.log("items => ", items);

  return (
    <div className="feeds">
      {items.map((item) => {
        return <FeedItem item={item} key={item.id} />;
      })}
    </div>
  );
};
