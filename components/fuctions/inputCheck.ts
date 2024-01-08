function inputLengthCheck(input: string): number {
  const regexEmptyInput = /^\S+$/;
  if (input != undefined) {
    const nameNoSpaces = input
      .split("")
      .filter((char) => regexEmptyInput.test(char));
    return nameNoSpaces.length;
  } else {
    return 0;
  }
}
export { inputLengthCheck };
