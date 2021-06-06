import { NextPage } from "next";
import { useRouter } from "next/router";

const Signin: NextPage = () => {
  const router = useRouter();
  router.push("/");

  return <></>;
};

export default Signin;
