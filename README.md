Immoment = Immutable Moment
===========================

[![npm install immoment](https://nodei.co/npm/immoment.png?compact=true)](https://www.npmjs.com/package/immoment)
<br>
[![Known Vulnerabilities](https://snyk.io/test/github/rsp/node-immoment/5a0e4559e58b6f51761af27433a782a886f56d74/badge.svg)](https://snyk.io/test/github/rsp/node-immoment/5a0e4559e58b6f51761af27433a782a886f56d74)
[![Downloads](https://img.shields.io/npm/dt/immoment.svg)](http://npm-stat.com/charts.html?package=immoment)

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
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
