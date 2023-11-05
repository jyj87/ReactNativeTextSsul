/**
 * Null Or Empty チェック
 * true: Null Or Empty の場合
 * false: Null Or Empty　意外の場合
 */
export const isNullOrEmpty = value => {
  return !value || value.trim() === '';
};


