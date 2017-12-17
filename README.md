# `lerna-get-packages`

> Get an array of packages from a lerna monorepo.

[![Travis](https://img.shields.io/travis/azz/lerna-get-packages.svg?style=flat-square)](https://travis-ci.org/azz/lerna-get-packages)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/lerna-get-packages.svg?style=flat-square)](https://npmjs.org/lerna-get-packages)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

## install

```bash
npm install --save lerna-get-packages
```

## usage

```js
const lernaGetPackages = require('lerna-get-packages');
const packages = lernaGetPackages(__dirname);
```

Returns an array of objects with the properties:

* `location`: file system path to the package.
* `package`: contents of the `package.json` file for the package.
