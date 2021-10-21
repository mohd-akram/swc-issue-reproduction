# "Minimal" reproduction repository for swc-related issues

I'm using the swc minifier with webpack, babel, react and styled-components.

The resulting build crashes when running: `npx webpack` with output (source map off):

```
index.js:1 Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at CM (index.js:1)
    at eL.useContext (index.js:1)
    at index.js:1
    at bZ (index.js:1)
    at cv (index.js:1)
    at Fy (index.js:1)
    at ea (index.js:1)
    at bG (index.js:1)
    at _F (index.js:1)
    at YE (index.js:1)

index.js:1 Uncaught Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at CM (index.js:1)
    at eL.useContext (index.js:1)
    at index.js:1
    at bZ (index.js:1)
    at cv (index.js:1)
    at Fy (index.js:1)
    at ea (index.js:1)
    at bG (index.js:1)
    at _F (index.js:1)
    at YE (index.js:1)
```

Switching to terser produces a valid build:

```js
// webpack.config.js

minimizer: [
  new TerserPlugin({
    // minify: TerserPlugin.swcMinify,
    terserOptions: { sourceMap: true },
    parallel: true
  })
]
```