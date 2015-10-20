#!/usr/bin/env node

var immoment = require('./index');
var moment = require('moment');

var mJan1 = moment('2015-01-01');
var mFeb1 = mJan1.add(1, 'months');
var mMar1 = mJan1.add(2, 'months');

var iJan1 = immoment('2015-01-01');
var iFeb1 = iJan1.add(1, 'months');
var iMar1 = iJan1.add(2, 'months');

console.log('moment - Feb1 is ' + mFeb1.format('MMM D'));
console.log('moment - Mar1 is ' + mMar1.format('MMM D'));

console.log('immoment - Feb1 is ' + iFeb1.format('MMM D'));
console.log('immoment - Mar1 is ' + iMar1.format('MMM D'));

console.log('max: ', immoment.max(iJan1, iFeb1).format('MMM D'));
console.log('min: ', immoment.min(iFeb1, iJan1).format('MMM D'));

console.log(immoment.min(iFeb1, iJan1)._isAMomentObject);

