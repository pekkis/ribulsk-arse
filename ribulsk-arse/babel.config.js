const plugin = [
  "babel-plugin-styled-components",
  {
    ssr: true,
    namespace: "ribulsk",
    displayName: true,
    preprocess: false,
    preProcess: false,
  },
];

module.exports = {
  plugins: [],
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  env: {
    server: {
      presets: [
        "@babel/preset-typescript",
        [
          "@babel/preset-env",
          {
            loose: false,
            targets: {
              node: "current",
            },
          },
        ],
      ],
      plugins: [plugin],
    },
    browser: {
      presets: [
        "@babel/preset-typescript",
        [
          "@babel/preset-env",
          {
            loose: false,
            modules: false,
          },
        ],
      ],
      plugins: [plugin],
    },
  },
};
