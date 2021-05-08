import Head from "next/head";
import Image from "next/image";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Story } from "../components/Story";

const Home = () => {
  return (
    <div className="relative bg-gray-200 h-full">
      <Header />
      <div className="page-content pt-6 h-full">
        <div className="container mx-auto flex h-full">
          <div className="left w-8/12 pr-4">
            <Story />
            <Feed />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
