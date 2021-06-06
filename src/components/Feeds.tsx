import { useEffect, useState } from "react";
import { FeedItem } from "src/components/FeedItem";
import { API, graphqlOperation } from "aws-amplify";
import { listArticlesByCreatedAt } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { ListArticlesByCreatedAtQuery, Article } from "src/API";

export const Feeds: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const fetchArticles = async () => {
    const response = (await API.graphql(
      graphqlOperation(listArticlesByCreatedAt, { type: "article", sortDirection: "DESC" })
    )) as GraphQLResult;
    const articles = response.data as ListArticlesByCreatedAtQuery;
    setArticles(articles.listArticlesByCreatedAt.items as Article[]);
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="feeds">
      {articles.map((item) => {
        return <FeedItem item={item} key={item.id} />;
      })}
    </div>
  );
};
