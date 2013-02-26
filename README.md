bundle-deps
===========

easy command to bundle all your dependencies

Bundling your dependencies has some advantages:

1. your module will install faster
2. your `node_modules` folder can contain tweaked or forked modules
3. locks down your dependency code for predictability in production
4. allows you to use private/git dependencies with [amino-deploy](https://github.com/amino/amino-deploy)

And disadvantages:

1. you need to keep your `bundledDependencies` package.json key up-to-date
2. you need to manually `npm update` to apply security/bug fixes for your dependencies

This module helps with disadvantage #1. Simply type `bundle-deps` in your project
root to update your `bundledDependencies` list based on the package.json
`dependencies` hash.

### Install

```
$ (sudo) npm install -g bundle-deps
```

### Usage

```
$ bundle-deps [path/to/project]
bundled 48 dependencies.
```

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT

- Copyright (C) 2012 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2012 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.