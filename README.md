# gitIO [![Build Status](https://secure.travis-ci.org/krrishd/gitio.png?branch=master)](http://travis-ci.org/krrishd/gitio)

A simple CLI to get your own custom git.io domain

## Getting Started
Install the module with: `npm install -g gitio-cli`

To create a new git.io URL:

```bash
$ gitio 'http://github.com/your-project-url' 'your-short-url-path'
```

## Examples
If I wanted to make `http://git.io/krish` redirect to `http://github.com/krrishd`:

```bash
$ gitio 'http://github.com/krrishd' 'krish'
```

## License
Copyright (c) 2014 Krish Dholakiya. Licensed under the MIT license.
