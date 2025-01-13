import { describe, test, expect } from '@jest/globals';
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './practice.js';

test('Fist letter should be capitalized', () => {
  expect(capitalize('champion')).toBe('Champion');
});

test('String should be reversed', () => {
  expect(reverseString('tailor')).toBe('roliat');
});

describe('Calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(5, 10)).toBe(15);
    expect(calculator.add(8, 12)).toBe(20);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.subtract(15, 10)).toBe(5);
    expect(calculator.subtract(16, 5)).toBe(11);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(30, 5)).toBe(6);
    expect(calculator.divide(100, 4)).toBe(25);
  });

  test('Multiplies two numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
    expect(calculator.multiply(25, 5)).toBe(125);
    expect(calculator.multiply(75, 4)).toBe(300);
  });
});

// Caesar Chipher
test('alphabet should wrap', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuations, spaces, and other non-alphabetical characters should remain unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
