import Image from "next/image";
import { useState, useContext } from "react";
import * as validate from "src/util/validate";
import { updateImage } from "src/firebase/image";
import firebase, { db } from "src/firebase/init";
import { AuthContext } from "src/contexts/AuthContext";
import { getRandomString } from "src/util/randomString";
import { useRequireLogin } from "src/hook/useRequireLogin";

const Post = () => {
  const { currentUser } = useContext(AuthContext);
  const [caption, setCaption] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  useRequireLogin();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (!(await validate.validImageFile(file))) {
      return;
    }
    setFileName(file?.name);
    reader.onloadend = async () => {
      setFile(file);
      setPreviewUrl(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };
  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate
    if (!caption) {
      alert("キャプションを入力してください");
      return;
    }
    if (!fileName) {
      alert("画像を選択してください");
      return;
    }

    // Storageに追加
    let updateFileName = getRandomString(20);
    updateFileName += "." + fileName.split(".").pop();
    const imageUrl = await updateImage(updateFileName, file);

    // DB(Firestore）に追加
    await db.collection("articles").add({
      uid: currentUser.uid,
      author: currentUser.displayName,
      caption: caption,
      imageUrl: imageUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="relative bg-gray-200 h-screen flex justify-center items-center flex-col">
      <div className="signin container max-w-sm bg-white border border-gray-400 text-center">
        <div className="p-4 md:p-8">
          <Image
            src="/assets/img/logo.svg"
            alt="logo"
            width={200}
            height={80}
          ></Image>
          <hr />
          <div className="pt-10">
            <form onSubmit={handlePost}>
              <div>
                {previewUrl ? (
                  <img alt="preview-image" src={previewUrl} />
                ) : null}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="icon"
                className="w-full mb-4"
              />
              <textarea
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                className="border border-gray-200 w-full px-3 py-2 mb-3"
                placeholder="キャプション"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full px-4 py-2 mt-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                投稿
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
