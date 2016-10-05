Immoment = Immutable Moment
===========================

[![npm install][install-img]][npm-url]
<br>
[![Build Status][travis-img]][travis-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![Downloads][downloads-img]][stats-url]
[![License][license-img]][license-url]

[npm-url]: https://www.npmjs.com/package/immoment
[github-url]: https://github.com/rsp/node-immoment
[readme-url]: https://github.com/rsp/node-immoment#readme
[issues-url]: https://github.com/rsp/node-immoment/issues
[license-url]: https://github.com/rsp/node-immoment/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/node-immoment
[travis-img]: https://travis-ci.org/rsp/node-immoment.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/node-immoment
[snyk-img]: https://snyk.io/test/github/rsp/node-immoment/badge.svg
[install-img]: https://nodei.co/npm/immoment.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/immoment.svg
[license-img]: https://img.shields.io/npm/l/immoment.svg
[stats-url]: http://npm-stat.com/charts.html?package=immoment
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow

It works just like [Moment.js](http://momentjs.com/)
but without [surprises](http://stackoverflow.com/questions/33002430/moment-js-formatting-incorrect-date).

This project is very young and is a work in progress.

The 0.1 version supports some methods on the `immoment` object itself,
but durations are not encapsulated yet.
Still it is already useful for simple use cases.

For example, in Moment when you write:

```js
var january1 = moment('2015-01-01');
var february1 = january1.add(1, 'months');
var march1 = january1.add(2, 'months');
```
you may be surprised that `march1` is now set to the April Fools' Day.

Using Immoment after running the above code `march1` would be **March 1**
which some people may find somewhat less surprising.

Roadmap
-------
* The 0.0.x is the first working experiment
* The 0.1.x has methods like `immoment.min()` working
* The 0.2.x will have durations properly encapsulated
* ...

Contact me with any suggestions.

Size
----
The minified version of Immoment is less than 0.5kB and less than 0.25kB gzipped.

Performance
-----------
The performane of Immoment is around 97% of the performance of Moment for a typical use case. See benchmarks:

* [http://jsperf.com/moment-vs-immoment](http://jsperf.com/moment-vs-immoment)

If your programs do anything else besides calling methods on Moment objects then you are not likely to see even that 3% hit.

Installation
------------
Install to use in your Node project, updating the dependencies in package.json:
```sh
npm install immoment --save
```

Usage
-----
To use it in place of moment:
```js
var moment = require('immoment');
```

Usage in browser
----------------
You need to load both moment.js and immoment.js (in that order).
Example with CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script src="https://cdn.rawgit.com/rsp/node-immoment/v0.1.1/immoment.min.js"></script>
```

See the latest version of Moment on:

* [https://cdnjs.com/libraries/moment.js](https://cdnjs.com/libraries/moment.js)

And the latest version of Immoment on:

* [https://github.com/rsp/node-immoment/releases](https://github.com/rsp/node-immoment/releases)

Example
-------

```js
var immoment = require('immoment');
var moment = require('moment');

var mJan1 = moment('2015-01-01');
var mFeb1 = mJan1.add(1, 'months');

var iJan1 = immoment('2015-01-01');
var iFeb1 = iJan1.add(1, 'months');

console.log('moment - Jan1 is ' + mJan1.format('MMM D'));
console.log('moment - Feb1 is ' + mFeb1.format('MMM D'));

console.log('immoment - Jan1 is ' + iJan1.format('MMM D'));
console.log('immoment - Feb1 is ' + iFeb1.format('MMM D'));
```

It outputs:

```
moment - Jan1 is Feb 1
moment - Feb1 is Feb 1
immoment - Jan1 is Jan 1
immoment - Feb1 is Feb 1
```

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-immoment/issues).

Author
------
[Rafał Pocztarski](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]

License
-------
This is **free software** released under the Expat (MIT) License.

It is a permissive, non-copyleft, GPL-compatible license that complies with:

* [The Free Software Definition](https://www.gnu.org/philosophy/free-sw.html.en)
* [The Debian Free Software Guidelines](https://www.debian.org/social_contract.html#guidelines)
* [The Open Source Definition](https://opensource.org/osd-annotated)

See [LICENSE.md][license-url] for details.
