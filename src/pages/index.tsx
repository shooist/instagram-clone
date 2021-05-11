import { NextPage } from "next";
import { Feeds } from "src/components/Feeds";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";
import { Story } from "src/components/Story";

const Index: NextPage = () => {
  return (
    <div className="relative bg-gray-200 h-full">
      <Header />
      <div className="page-content pt-6 h-full">
        <div className="container mx-auto flex h-full">
          <div className="left w-8/12 pr-4">
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
