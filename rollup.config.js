const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const { uglify } = require("rollup-plugin-uglify");

const pkg = require("./package.json");
const dependencies = Object.keys(pkg.dependencies);

const replaceNodeEnv = () =>
  replace({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "test")
  });

module.exports = [
  {
    input: "src/index.js",
    output: {
      name: "mdx-deck-kabisa-theme",
      file: "dist/mdx-deck-kabisa-theme.js",
      format: "cjs",
      exports: "named"
    },
    external: dependencies,
    plugins: [
      babel({ exclude: "node_modules/**" }),
      resolve(),
      commonjs(),
      replaceNodeEnv(),
      uglify()
    ]
  }
];
