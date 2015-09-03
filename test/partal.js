"use strict";

var test = require("tape"),
    format = require("util").format,
    partial = require("../index");

test("partal is partial apply", function(assert) {

    var tpl = partial(format, "Always say %s or %s ok?");

    assert.equal(tpl("this", "that"), "Always say this or that ok?");

    var tpl = partial(format, "first: %s, second: %s, third: %s");

    assert.equal(tpl(1, 2, 3), "first: 1, second: 2, third: 3")

    tpl = partial(tpl, "A");

    assert.equal(tpl(1, 2, 3), "first: A, second: 1, third: 2 3")

    tpl = partial(tpl, 42);

    assert.equal(tpl(1, 2, 3), "first: A, second: 42, third: 1 2 3")

    assert.end();

});