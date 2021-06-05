import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SigninForm } from "src/components/separate/form/SigninForm";
import { useRouter } from "next/router";

const Signin: NextPage = () => {
  const router = useRouter();
  router.push("/");

  return <></>;
};

export default Signin;
