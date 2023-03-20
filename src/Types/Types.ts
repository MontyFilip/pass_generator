export type PasswordGenerator = (
  length: number,
  numbers: boolean,
  bigLetters: boolean,
  specialChars: boolean,
) => null | undefined;

// export interface Generator{
//   length?: number;
//   numbers?: boolean;
//   bigLetters?: boolean;
//   specialChars?: boolean;
// };