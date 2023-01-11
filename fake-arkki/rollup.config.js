import { babel } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";

// rollup.config.js
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs"
    },
    {
      file: "dist/index.js",
      format: "esm"
    }
  ],
  plugins: [
    externals(),
    nodeResolve({
      /*
      customResolveOptions: {
        moduleDirectory: "src"
      },
      */
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    babel({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      babelHelpers: "bundled"
    })
  ]
};
