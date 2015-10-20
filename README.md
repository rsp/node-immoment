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

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
