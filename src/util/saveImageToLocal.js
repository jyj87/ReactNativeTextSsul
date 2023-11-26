import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

// 참조 취득한 패스를 이미지에 뿌리는 법
// source={{ uri: `file://${imagePath}` }} 
export const saveImageToLocal = async (imageBytes, imageName) => {
  try {
  // 바이트 정보로 이미지 파일 생성
  const imagePath = `${RNFetchBlob.fs.dirs.CacheDir}/${imageName}.jpg`;

  await RNFetchBlob.fs.writeFile(imagePath, imageBytes, 'base64');

  // 저장된 이미지 경로 반환
  return imagePath;
  } catch (error) {
    console.error('이미지를 저장하는 중 에러 발생:', error);
    throw error;
  }
};
