// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test (408) 123-1234 is valid phone number', () => {
  expect(isPhoneNumber('(408) 123-1234')).toBe(true);
});

test('test 408-123-1234 is valid phone number', () => {
  expect(isPhoneNumber('408-123-1234')).toBe(true);
});

test('test 408123 is not valid phone number', () => {
  expect(isPhoneNumber('408123')).toBe(false);
});

test('is 408 1234567 is not valid phone number', () => {
  expect(isPhoneNumber('408 1234567')).toBe(false);
});

test('test abcd@abcd.com is valid email', () => {
  expect(isEmail('abcd@abcd.com')).toBe(true);
});

test('test janedoe@gmail.com is valid email', () => {
  expect(isEmail('janedoe@gmail.com')).toBe(true);
});

test('test abcd@gmail is not valid email', () => {
  expect(isEmail('abcd@gmail')).toBe(false);
});

test('test jane doe@gmail.com is not valid email', () => {
  expect(isEmail('jane doe@gmail')).toBe(false);
});

test('test abcd is strong password', () => {
  expect(isStrongPassword('abcd123')).toBe(true);
});

test('test a_bcde12345 is strong password', () => {
  expect(isStrongPassword('a_bcde12345')).toBe(true);
});

test('test 1234 is not strong password', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('test abc is not strong password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('test 05/02/2024 is valid date', () => {
  expect(isDate('05/02/2024')).toBe(true);
});

test('test 5/2/2024 is valid date', () => {
  expect(isDate('5/2/2024')).toBe(true);
});

test('test 5/2/24 is not valid date', () => {
  expect(isDate('5/2/24')).toBe(false);
});

test('05 02 2024 is not valid date', () => {
  expect(isDate('05 02 2024')).toBe(false);
});

test('test #ABCDEF is valid', () => {
  expect(isHexColor('#ABCDEF')).toBe(true);
});

test('test #123 is valid', () => {
  expect(isHexColor('#123')).toBe(true);
});

test('test #12 is not valid', () => {
  expect(isHexColor('#12')).toBe(false);
});

test('test #ABC12G is not valid', () => {
  expect(isHexColor('#ABC12G')).toBe(false);  // G is not a hex digit
});
