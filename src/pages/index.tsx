import { Feeds } from "src/components/Feeds";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listArticles } from "src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { ListArticlesQuery } from "src/API";
import { Article } from "src/types/types";

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const res = await fetch(process.env.BACKEND_URL, {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({
//   //     query: ARTICLES_QUERY,
//   //   }),
//   // });
//   // const json = await res.json();
//   // if (json.errors) {
//   //   console.error(json.errors);
//   //   throw new Error("Failed to fetch API");
//   // }
//   // return {
//   //   props: {
//   //     items: json.data.getArticles,
//   //   },
//   // };
// };

// type FeedsItemProp = { items: FeedItemType[] };

const Index: React.VFC = () => {
  // const [articles, setArticles] = useState<Article[]>([]);
  // const fetchArticles = async () => {
  //   try {
  //     console.log("hogehoge");
  //     const response = (await API.graphql(
  //       graphqlOperation(listArticles)
  //     )) as GraphQLResult;
  //     console.log("response : ", response);
  //     console.log("foofoo");
  //     const articles = response.data as ListArticlesQuery;
  //     if (articles.listArticles !== null) {
  //       setArticles(articles.listArticles.items as Article[]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchArticles();
  // }, []);
  // console.log("articles : ", articles);

  return (
    <div className="hoge relative bg-gray-200 h-full">
      <Header />
      <div className="page-content pt-6 h-full">
        <div className="container mx-auto h-full xl:w-1/2 lg:w-2/3 md:w-full">
          <div className="left">
            {/* <Story /> */}
            <Feeds />
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
