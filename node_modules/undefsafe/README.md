# undefsafe

Simple *function* for retrieving deep object properties without getting "Cannot read property 'X' of undefined"

Can also be used to safely set deep values.

## Usage

```js
var object = {
  a: {
    b: {
      c: 1,
      d: [1,2,3],
      e: 'remy'
    }
  }
};

console.log(undefsafe(object, 'a.b.e')); // "remy"
console.log(undefsafe(object, 'a.b.not.found')); // undefined
```

Demo: [https://jsbin.com/eroqame/3/edit?js,console](https://jsbin.com/eroqame/3/edit?js,console)

## Setting

```js
var object = {
  a: {
    b: [1,2,3]
  }
};

// modified object
var res = undefsafe(object, 'a.b.0', 10);

console.log(object); // { a: { b: [10, 2, 3] } }
console.log(res); // 1 - previous value
```
