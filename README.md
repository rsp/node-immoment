Immomemnt = Immutable Moment
============================

It works just like Moment.js but doesn't mutate data in place.

For example, in Moment when you write:

```js
var january1 = moment('2015-01-01');
january1.format(); // returns: "2015-01-01T00:00:00+01:00"

var february1 = january1.add(1, 'months');
var march1 = january1.add(2, 'months');
var april1 = january1.add(3, 'months');
```
you may be surprised that `february1` is **July 1**.

Installation
------------
Install to use in your project, updating the dependencies in package.json:
```sh
npm install immoment --save
```

Usage
-----
To use it in place of moment:
```js
var moment = require('immoment');
```

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

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
