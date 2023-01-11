const plugin = [
  "babel-plugin-styled-components",
  {
    ssr: true,
    namespace: "ribulsk",
    displayName: true,
    preprocess: false,
    preProcess: false
  }
];

export default {
  plugins: [],
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic"
      }
    ],
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        loose: false,
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
