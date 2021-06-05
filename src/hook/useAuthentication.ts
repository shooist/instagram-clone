import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export const useAuthentication = () => {
  const [user, setUser] = useState();

  const getUser = async () => {
    const _user = await Auth.currentUserInfo();
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
