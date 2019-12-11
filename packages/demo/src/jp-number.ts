const jp = '〇一二三四五六七八九'.split('');

export const JPNumber = (num: number) => {
  return String(num)
    .split('')
    .map(s => jp[Number(s)])
    .join('');
};
