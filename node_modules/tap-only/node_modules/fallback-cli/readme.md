# fallback-cli [![Build Status](https://travis-ci.org/jamestalmage/fallback-cli.svg?branch=master)](https://travis-ci.org/jamestalmage/fallback-cli)

> Default to the locally installed version of your CLI, use the global one if not found.

This allows users to install your tool globally, but revert to whatever version is installed
locally in `node_modules`. `npm` already handles this when running scripts defined in `package.json`,
but this works even when invoking your CLI command directly from the console.

## Install

```
$ npm install --save fallback-cli
```

## Usage

The following assumes you have a package named `my-module`, and the CLI script is `bin/cli.js`.

First, create `cli-shim.js`, and place it in the *same directory* as your current CLI script.

`bin/cli-shim.js`:

```js
#!/usr/bin/env node
require('fallback-cli')('my-module/bin/cli.js');
```

Next update your `package.json` to point to `cli-shim.js`.

```json
{
  "name": "my-module",
  "bin": "bin/cli-shim.js"
}
```

*That is it!* 

Your globally installed CLI will use the local version from `node_modules` if it exists.
In most cases this will even be compatible with old versions of your CLI before you introduced `fallback-cli`.

**Note:** `cli.js` and `cli-shim.js` are arbitrary file names, use whatever you want.

## API

### fallbackCli(path, [relativePath], [customRunner])

Only `path` is required.

  * `path`: *must* be a `string` describing your packages name, and the path to your CLI within the package (i.e. `my-module/bin/my-cli.js`).
        
  * `relativePath`: It is *highly recommended* that your "shim" to be installed in the same directory as the actual CLI. 
If that is not possible, you *may* use `relativePath` to describe where it is relative to the shim.

    ```js
    fallbackCli('my-module/bin/the-cli.js', '../bin/the-cli.js');
    ```
    
  If specified, `relativePath` *must* point to the same file as `path`.
    
  * `customRunner`: A callback that that will be invoked with a single `runnerOptions` object. It should launch your CLI implementation.
  
  The default runner is simple: 
  
  ```js
  function defaultRunner(runnerOptions) {
    require(runnerOptions.cli);
  }
  ```
  
#### runnerOptions
  
  If you specify a `customRunner` function, it is passed an object with these properties:

  * `localCli`: The absolute path of the CLI script in the locally installed module. It will be `null` if there is no local install.
  
  * `globalCli`: The absolute path of the CLI script in the globally installed module. It will be `null` if the locally installed script was invoked directly (i.e. via `npm run <script>`, or `./node_modules/.bin/my-cli`).
  
  * `localPkg`: The absolute path of `package.json` in the local module. Useful for determining the version of the local install. 
                It will be `null` if there is no local install, or in the very unlikely event `package.json` could not be found in the locally installed module.
  
  * `globalPkg`: The absolute path of `package.json` in the global module. Useful for determining the version of the global install. 
                 It will be `null` if the locally installed script was invoked directly, or if `package.json` could not be found in the globally installed module.
                 
  It is possible to confuse the algorithm that finds the global `package.json` if you do not put the shim in the same directory as the CLI script and use the `relativePath` argument.
  For this reason, it is *highly recommended* you put them both in the same directory and avoid using `relativePath`. 
   
  * `cli`: The same as `localCli` if found, otherwise falls back to be the same as `globalCli`. Convenience property for implementing a graceful fallback.
  
  * `pkg`: The same as `localPkg` if found, otherwise falls back to be the same as `globalPkg`.
  
  * `location`: Either `"local"` or `"global"` depending on which is found (`local` takes precedence).

**Note:** All properties are of type `string`. All properties except `location` can also be `null`.

## Alternate API

### fallbackCli(options)

As an alternative to individual arguments, you can provide a single `options` argument.

#### options.path

**required**

Type: `string`

Same as `path` described in `fallbackCli(path)` above.

#### options.relative

*optional*

Type: `string`

Same as `relativePath` described in `fallbackCli(path, relativePath)` above.

#### options.run

*optional*

Type: `callback(runnerOptions)`

Same as `customRunner` described in `fallbackCli(path, customRunner)` above.

## License

MIT © [James Talmage](http://github.com/jamestalmage)
