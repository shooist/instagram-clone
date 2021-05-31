import { FeedItem } from "src/components/FeedItem";
import { FeedItemType } from "src/types/types";

type FeedsItemProp = { items: FeedItemType[] };

export const Feeds: React.VFC<FeedsItemProp> = (props) => {
  return (
    <div className="feeds">
      {props.items.map((item) => {
        return <FeedItem item={item} key={item.id} />;
      })}
    </div>
  );
};
