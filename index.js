require("dotenv").config();

const express = require("express");
const axios = require("axios");
const { FullArticle } = require("@yleisradio/arkki-web");
const ReactDOM = require("react-dom/server");
const { ServerStyleSheet, StyleSheetManager } = require("styled-components");

const run = async () => {
  const ret = await axios.get(
    `https://articles.api.yle.fi/v2/articles.json?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&id=74-20011471`
  );

  const articulado = ret.data.data[0];

  const render = () => {
    const sheet = new ServerStyleSheet();
    try {
      const html = ReactDOM.renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <FullArticle
            endpoint="aav2"
            data={articulado}
            disableSubjectInteraction
            showImages
            showPrimarySubject={false}
            showShareButtons={false}
            showSubjectList={false}
            showFullTimestamps
          />
        </StyleSheetManager>
      );
      const styleTags = sheet.getStyleTags();

      return [html, styleTags];

      // or sheet.getStyleElement();
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }
  };

  const app = express();

  app.use("/dist", express.static("dist"));

  // respond with "hello world" when a GET request is made to the homepage
  app.get("/", (req, res) => {
    const [tussenhofer, styleTags] = render();

    res.send(`<!doctype html>
      <html dir="ltr" lang="fi">
        <head>
            <title>Moi</title>
            ${styleTags}
        </head>
        <body>
        <h1>RIBULSK-ARKKI</h1>


        <div id="app">
        ${tussenhofer}
        </div>



        <div id="state">${JSON.stringify(articulado)}</div>

        <script src="/dist/main.js"></script>
        </body>
      </html>`);
  });

  app.listen(3003, () => {
    console.log("LISTENING IN 3003");
  });
};

run();
