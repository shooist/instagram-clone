import { GetServerSideProps } from "next";
import { Feeds } from "src/components/Feeds";
import { Header } from "src/components/Header";
import { FeedItemType } from "src/types/types";
import { ARTICLES_QUERY } from "src/graphql/article.query";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ARTICLES_QUERY,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return {
    props: {
      items: json.data.getArticles,
    },
  };
};

type FeedsItemProp = { items: FeedItemType[] };

const Index: React.VFC<FeedsItemProp> = (props) => {
  return (
    <div className="relative bg-gray-200 h-full">
      <Header />
      <div className="page-content pt-6 h-full">
        <div className="container mx-auto h-full xl:w-1/2 lg:w-2/3 md:w-full">
          <div className="left">
            {/* <Story /> */}
            <Feeds items={props.items} />
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
