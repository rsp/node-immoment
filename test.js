#!/usr/bin/env node
'use strict';

var test = require('tape');
var immoment = require('./index');
var moment = require('moment');

var mJan1 = moment('2015-01-01');
var mFeb1 = mJan1.add(1, 'months');
var mMar1 = mJan1.add(2, 'months');

var iJan1 = immoment('2015-01-01');
var iFeb1 = iJan1.add(1, 'months');
var iMar1 = iJan1.add(2, 'months');

test('immutable adding', function (t) {
    t.plan(3);
    t.equals(iJan1.format('MMM D'), 'Jan 1', 'should not mutate on add()');
    t.equals(iFeb1.format('MMM D'), 'Feb 1', 'should return correct value and not mutate after add()');
    t.equals(iMar1.format('MMM D'), 'Mar 1', 'should return correct value after chained add()');
});
test('comparisons', function (t) {
    t.plan(2);
    t.equals(immoment.min(iFeb1, iJan1).format('MMM D'), 'Jan 1', 'should compare correctly with min()');
    t.equals(immoment.max(iMar1, iJan1).format('MMM D'), 'Mar 1', 'should compare correctly with max()');
});
