import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "src/contexts/AuthContext";

export const useRequireLogin = () => {
  const { currentUser, isSignin } = useContext(AuthContext);
  const router = useRouter();

  // 未ログインの場合、ログインページへリダイレクト
  useEffect(() => {
    if (isSignin && !currentUser) {
      router.push("/signin");
    }
  }, [currentUser, isSignin]);
};
