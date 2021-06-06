import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

export const useAuthentication = () => {
  const [user, setUser] = useState<CognitoUser | undefined>();

  const getUser = async () => {
    const _user = await Auth.currentAuthenticatedUser();
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
