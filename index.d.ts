// нужно для того чтобы TS нормально импортил изображения

declare module '*.png' {
  const file: number;
  export default file;
}

declare module '*.jpg' {
  const file: number;
  export default file;
}

declare module '*.jpeg' {
  const file: number;
  export default file;
}
declare module '*.json' {
  const file: number;
  export default file;
}
