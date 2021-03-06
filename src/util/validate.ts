const limitFileSizeMbyte = 1; // Mバイト
const limitFileSize = limitFileSizeMbyte * 1024 * 1024;
const allowImageFileType = ["image/png", "image/gif", "image/jpeg"];

const getMimetype = (signature: string) => {
  switch (signature) {
    case "89504E47":
      return "image/png";
    case "47494638":
      return "image/gif";
    case "25504446":
      return "application/pdf";
    case "FFD8FFDB":
    case "FFD8FFE0":
    case "FFD8FFE1":
      return "image/jpeg";
    case "504B0304":
      return "application/zip";
    default:
      return "Unknown filetype";
  }
};

const parseFileHead = (file: File): Promise<ArrayBuffer> =>
  new Promise((resolve, reject) => {
    const chunkSize = 4; // bytes
    const r = new FileReader();
    const blob = file.slice(0, chunkSize);
    r.onload = (evt) => {
      if (evt?.target?.error == null) {
        return resolve(evt?.target?.result as ArrayBuffer);
      }
      return reject("Read error: " + evt.target.error);
    };
    r.readAsArrayBuffer(blob);
  });

export const validImageFile = async (file: File) => {
  if (file.size > limitFileSize) {
    alert(
      `ファイルサイズが大きすぎます。${limitFileSizeMbyte}Mバイト以下にしてください`
    );
    return false;
  }

  if (allowImageFileType.indexOf(file.type) === -1) {
    alert(`画像ファイル以外はアップロードできません。`);
    return false;
  }

  const result = await parseFileHead(file);
  const uint = new Uint8Array(result);
  const bytes: any[] = [];
  uint.forEach((byte) => {
    bytes.push(byte.toString(16));
  });
  const hex = bytes.join("").toUpperCase();
  if (allowImageFileType.indexOf(getMimetype(hex)) === -1) {
    console.log(hex);
    alert(`画像ファイル以外はアップロードできません!!`);
    return false;
  }
  return true;
};
