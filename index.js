'use strict';

var sliced = require("sliced");

module.exports = function partial(fn) {
    var args = sliced(arguments, 1);

    return function() {
        return fn.apply(null, args.concat(sliced(arguments)));
    };
};