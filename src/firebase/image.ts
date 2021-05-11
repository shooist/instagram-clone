import { storage } from "src/firebase/init";

export const updateImage = async (
  path: string,
  data: File
): Promise<string> => {
  if (!path) throw new Error("required path");

  const ref = storage.ref();
  const imageRef = ref.child(`lostrpg/images/${path}`);
  await imageRef.put(data);
  return await imageRef.getDownloadURL();
};

export const deleteImage = async (path: string) => {
  const ref = storage.ref();
  const imageRef = ref.child(`lostrpg/images/${path}`);
  return await imageRef.delete();
};
