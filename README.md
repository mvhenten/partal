# partal

Partial apply

This is `partial` as simple as it gets. similar to all the other partials.
I reviewed the top few partials, either I they did too much or had too old packages.

This one only does one thing, and it doesn't even let you provide the "this" argument.
( use .bind for that )

## install

`npm install`

## usage

```javascript
    var partial = require("partal");
    var format = require("util").format;

    var tpl = partial(format, "first: %s, second: %s, third: %s");

    assert.equal(tpl(1, 2, 3), "first: 1, second: 2, third: 3")

    tpl = partial(tpl, "A");

    assert.equal(tpl(1, 2, 3), "first: A, second: 1, third: 2 3")
```

