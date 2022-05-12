export const isSVG = (url: string): boolean => /(?!.*\.icon\.svg$)^.+\.svg$/.test(url);
