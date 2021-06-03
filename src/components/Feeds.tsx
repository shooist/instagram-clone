import { useEffect, useState } from "react";
import { FeedItem } from "src/components/FeedItem";
import { API, graphqlOperation } from "aws-amplify";
import { listArticles } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { ListArticlesQuery } from "src/API";
import { Article } from "src/types/types";

// type FeedsItemProp = { items: FeedItemType[] };

export const Feeds: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const fetchArticles = async () => {
    const response = (await API.graphql(
      graphqlOperation(listArticles)
    )) as GraphQLResult;
    const articles = response.data as ListArticlesQuery;
    if (articles.listArticles !== null) {
      setArticles(articles.listArticles.items as Article[]);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log("articles : ", articles);

  return (
    <div className="feeds">
      {articles.map((item) => {
        return <FeedItem item={item} key={item.id} />;
      })}
    </div>
  );
};
