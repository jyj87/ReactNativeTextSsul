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
