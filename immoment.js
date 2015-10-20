/*
immoment.js
Copyright (c) 2015 Rafał Pocztarski
Released under MIT license
https://github.com/rsp/node-immoment
*/

window.immoment = (function (moment) {

function Immoment (mo) {
    this._mc = function () {
        return mo.clone();
    };
}

var mo = moment();

for (var m in mo) {
    Immoment.prototype[m] = (function (m) {
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

return immoment;

}(moment));
