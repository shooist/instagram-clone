import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createArticle } from "src/graphql/mutations";
import toast from "react-hot-toast";
import { useAuthentication } from "src/hook/useAuthentication";
import { getUser } from "src/graphql/queries";
import { createUser, updateUser } from "src/graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { GetUserQuery } from "src/API";

const Post = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const { user } = useAuthentication();

  const checkUserRegist = async () => {
    if (!user) return;

    try {
      setUserId(user.getUsername());
      console.log("user : ", user);
      console.log("username : ", user.getUsername());

      // select user query
      const response = (await API.graphql(graphqlOperation(getUser, { id: user.getUsername() }))) as GraphQLResult;
      const getQuery = response.data as GetUserQuery;
      console.log("response : ", response);
      console.log("userData : ", getQuery.getUser);

      // if user is empty, create new record
      if (!getQuery.getUser) {
        await API.graphql(
          graphqlOperation(createUser, {
            input: {
              id: user.getUsername(),
            },
          })
        );
        console.log("create user recored. ID = ", user.getUsername());
      } else {
        const _user = getQuery.getUser;
        setUserName(_user.name);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkUserRegist();
  }, [user]);

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate
    if (!userName) {
      toast.error("ユーザー名を入力してください");
      return;
    }

    try {
      // DynamoDBに追加
      await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: userId,
            name: userName,
          },
        })
      );

      toast.success("更新しました");
    } catch (error) {
      toast.error("更新でエラーが発生しました");
      console.log(error);
    }
  };

  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin container max-w-sm bg-white border border-gray-400 text-center">
        <div className="p-4 md:p-8">
          <Link href="/">
            <a>
              <Image src="/assets/img/logo.svg" alt="logo" width={200} height={80}></Image>
            </a>
          </Link>

          <hr />
          <div className="pt-10">
            <p className="text-left font-bold mb-2">プロフィールを編集</p>
            <form onSubmit={handlePost}>
              {/* <div>{previewUrl ? <Image alt="preview-image" src={previewUrl} width={480} height={480} /> : null}</div>
              <input type="file" accept="image/*" onChange={handleImageChange} id="icon" className="w-full mb-4" /> */}
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="ユーザー名"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full px-4 py-2 mt-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
