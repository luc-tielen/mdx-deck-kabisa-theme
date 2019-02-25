# mdx-deck-kabisa-theme

A custom theme for use with [https://github.com/jxnblk/mdx-deck](mdx-deck).

## Usage

If you want to use this theme in your mdx-deck based presentations,
you will need to do the following 2 things:

1. add this dependency to your package.json

```javascript
{
  "dependencies": {
    "mdx-deck-kabisa-theme": "luc-tielen/mdx-deck-kabisa-theme#master",
    // other dependencies...
  }
  // more config ...
}
```

2. add the following webpack config:

```javascript
module.exports = {
  module: {
    rules: [
      // other rules ...
      {
        test: /\.(svg|png|jpg)$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /node_modules\/mdx-deck-kabisa-theme\/*\.js/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/react", "@babel/env"],
          plugins: []
        }
      }
    ]
  }
  // other webpack-related config...
};
```
