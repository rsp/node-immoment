Immomemnt = Immutable Moment
============================

It works just like Moment.js but without surprises.

For example, in Moment when you write:

```js
var january1 = moment('2015-01-01');
var february1 = january1.add(1, 'months');
var march1 = january1.add(2, 'months');
var april1 = january1.add(3, 'months');
```
you may be surprised that `february1` is **July 1**.

Using Immoment after running the above code `february1` would be **February 1** which some people may find somewhat less surprising.

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

Usage in browser
----------------
You need to load both moment.js and immoment.js (in that order).
Example with CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script src="https://cdn.rawgit.com/rsp/node-immoment/v0.0.6/immoment.min.js"></script>
```

See the latest version of Moment on:

* https://cdnjs.com/libraries/moment.js

And the latest version of Immoment on:

* https://github.com/rsp/node-immoment/releases

The minified version of Immoment is less than 0.5kB and less than 0.25kB gzipped.

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
