// immoment
// https://github.com/rsp/node-immoment

"use strict";

var moment = require('moment');

for (var m in moment) {
    if (typeof moment[m] == 'function') immoment[m] = (function (m) {
        return function () {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
                var a = arguments[i];
                args[i] = a instanceof Immoment ? a._mc() : a;
            }
            var r = moment[m].call(moment, args);
            return r._isAMomentObject ? new Immoment(r) : r;
        };
    }(m));
}

function Immoment (mo) {
    this._mc = function () {
        return mo.clone();
    };
}

var mo = moment();

for (var m in mo) {
    if (typeof mo[m] == 'function') Immoment.prototype[m] = (function (m) {
        return function () {
            var mc = this._mc();
            return mc[m].apply(mc, arguments);
        };
    }(m));
}

function immoment () {
    var mo = moment.apply(this, arguments);
    return new Immoment(mo);
}

module.exports = immoment;

