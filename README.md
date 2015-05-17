# lyn
the Command Line Tool for Courting Developers

[![NPM](https://nodei.co/npm/lyn.png?global=true)](https://nodei.co/npm/lyn/)

Windows        | Mac/Linux
-------------- | ------------
[![Build status](https://ci.appveyor.com/api/projects/status/tijpagmaxb80rnul/branch/alpha?svg=true)](https://ci.appveyor.com/project/thechunsik/git)| [![Travis](http://img.shields.io/travis/thechunsik/lyn.svg?style=flat)](https://travis-ci.org/thechunsik/lyn)

## Installation

  1. install dependencies
  ```bash
  npm install
  npm link
  ```

  2. configuration
  ```bash
  mv config.example.js config.js
  vim config.js
  ```

## Usage

#### lyn init
Prints the default message of this tool.

#### lyn email
Send an email to your friend

- options

```bash
    --subject, -s         the subject of the email
    --message, -m         the body content of the email
```

#### lyn music
Rearrange music files from a specific directory to a specific directory by artists


## Essential
  - [Mandrill API](https://mandrillapp.com)

## Reference
  - [dat](https://github.com/maxogden/dat)
