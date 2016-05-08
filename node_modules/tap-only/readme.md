# tap-only

> Get exclusive/only/ focus tests for node-tap.


## Install

```sh
$ npm install --save tap tap-only
```

Import `tap-only` in your tests in place of tap

```js
// test.js
var test = require('tap-only');

test('test name', function (t) {
  t.is(...);
});

// when you want an exclusive test, just do this:

test.only('test name', function (t) {
  // ...
});
```

Run `tap` like you always do

```sh
$ tap test/*.js | tap-spec
```

Enjoy easy exclusive tests.


## API

See [the source](https://github.com/jamestalmage/tap-only/blob/master/index.js) to understand how it works (it's simple).

### test(...) 

identical to tap.test

### test.only(...)

identical to tap.test, but it disables all tests without the "only" modifier

### test.start()

This will be called automatically for you on the next event loop if not disabled.
This tallies up the tests, determines if you are running in exclusive mode or not and calls
`tap` with the filtered tests.

### test.disableAutoStart()

This disables the automatic start. You will now be responsible for calling `test.start()` to get things rolling.


## License

MIT © [James Talmage](http://github.com/jamestalmage)
