const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const { uglify } = require("rollup-plugin-uglify");

const replaceNodeEnv = () =>
  replace({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "test")
  });

module.exports = [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.js",
      format: "cjs",
      exports: "named"
    },
    external: [
      "react",
      "react-dom",
      "mdx-deck",
      "mdx-deck/Provider",
      "react-syntax-highlighter/languages/prism/reason"
    ],
    plugins: [
      babel({ exclude: "node_modules/**" }),
      commonjs(),
      resolve(),
      replaceNodeEnv(),
      uglify()
    ]
  }
];
