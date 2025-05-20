const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
  test('inverte una stringa normale', () => {
    expect(reverseString('ciao')).toBe('oaic');
  });

  test('gestisce stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });

  test('gestisce una stringa con spazi', () => {
    expect(reverseString('a b')).toBe('b a');
  });

  test('gestisce caratteri speciali', () => {
    expect(reverseString('!@#')).toBe('#@!');
  });
});

describe('isPalindrome', () => {
  test('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });

  test('riconosce un palindromo con maiuscole e spazi', () => {
    expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
  });

  test('riconosce una stringa non palindroma', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });

  test('gestisce stringa vuota', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('gestisce stringa con un solo carattere', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});

describe('truncateString', () => {
  test('tronca una stringa più lunga del massimo', () => {
    expect(truncateString('abcdef', 4)).toBe('abcd...');
  });

  test('non tronca se la stringa è corta', () => {
    expect(truncateString('abc', 5)).toBe('abc');
  });

  test('tronca esattamente alla lunghezza massima', () => {
    expect(truncateString('abcde', 5)).toBe('abcde');
  });

  test('gestisce stringa vuota', () => {
    expect(truncateString('', 3)).toBe('');
  });

  test('gestisce maxLength zero', () => {
    expect(truncateString('abc', 0)).toBe('...');
  });
});

describe('countCharacters', () => {
  test('conta i caratteri di una stringa normale', () => {
    expect(countCharacters('aab')).toEqual({ a: 2, b: 1 });
  });

  test('gestisce stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });

  test('conta caratteri speciali e spazi', () => {
    expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
  });

  test('distingue maiuscole e minuscole', () => {
    expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
  });
});