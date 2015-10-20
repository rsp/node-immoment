// immoment
// https://github.com/rsp/node-immoment

"use strict";

var moment = require('moment');

function Immoment (mo) {
    this._mc = function () {
        return mo.clone();
    }
}

Immoment.prorotype = {};

var mo = moment();

for (var m in mo) {
    Immoment.prototype[m] = (function (m) {
        return function () {
            var mc = this._mc();
            return mc[m].apply(mc, arguments);
        }
    }(m));
}

function immoment () {
    var mo = moment.apply(this, arguments);
    return new Immoment(mo);
}

module.exports = immoment;

