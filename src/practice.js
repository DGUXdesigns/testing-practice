export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },

  divide: function (num1, num2) {
    return num1 / num2;
  },

  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

export function caesarCipher(string, shift) {
  const LowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const UpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const cipherLower = LowerCaseLetters.slice(shift).concat(
    LowerCaseLetters.slice(0, shift),
  );

  const cipherUpper = UpperCaseLetters.slice(shift).concat(
    UpperCaseLetters.slice(0, shift),
  );

  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (/[a-z]/.test(string[i])) {
      const index = LowerCaseLetters.indexOf(string[i]);
      newString += cipherLower[index];
    } else if (/[A-Z]/.test(string[i])) {
      const index = UpperCaseLetters.indexOf(string[i]);
      newString += cipherUpper[index];
    } else {
      newString += string[i];
    }
  }

  return newString;
}
