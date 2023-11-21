/**
 * Null Or Empty チェック
 * true: Null Or Empty の場合
 * false: Null Or Empty　意外の場合
 */
export const isNullOrEmpty = value => {
  return !value || value.trim() === '';
};

/**
 * BackEnd転送するSortコード変換
 * 1: いいね順
 * 2: 照会順
 * 3: 最近順
 * 4: コメント順
 */
export const changeSortCode = value => {
  if (value === 1) {
    return 'likeCnt';
  } else if (value === 2) {
    return 'viewCnt';
  } else if (value === 3) {
    return 'date';
  } else {
    return 'commentCnt';
  }
};

/**
 * Date型のデータを変更
 */
export const formatDate = dateString => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  return formattedDate;
};
