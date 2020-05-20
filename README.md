# Practical work - Practice TDD

![Run tests](https://github.com/qathom/softweng-tp/workflows/Run%20tests/badge.svg)

## Installation

```bash
npm install
```

## Explanation

For this practical work, I used TypeScript and Jest: `jest`, `ts-jest` and `typescript`.
To make sure to keep consistency while coding, I also included `eslint`.
The unit test (`in tests/helper.spec.ts`) is making sure that our helper function located in `src/helpers.ts` is returning the correct corresponding class name (between D, C and PC).
In the test suite, we make sure to test many values but also to throw an exception (`TypeError`) if an unexpected number `NaN` is passed.

Input classes have been represented thanks to an enumeration (in `types.ts`).

## Usage

```bash
# Run tests
npm run test

# Lint files
npm run lint
```
