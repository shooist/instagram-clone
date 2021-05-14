import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "src/contexts/AuthContext";

export const useRequireLogin = () => {
  const { currentUser, isAuthChecked } = useContext(AuthContext);
  const router = useRouter();

  // 未ログインの場合、ログインページへリダイレクト
  useEffect(() => {
    if (isAuthChecked && !currentUser) {
      router.push("/signin");
    }
  }, [currentUser, isAuthChecked]);
};
