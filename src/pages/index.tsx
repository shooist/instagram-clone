import { Feeds } from "src/components/Feeds";
import { Header } from "src/components/Header";

const Index: React.VFC = () => {
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
