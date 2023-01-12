import "dotenv/config";
import express from "express";
import axios from "axios";
import ReactDOM from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "./src/App";
import fs from "fs/promises";

const render = async (articuladoId) => {
  const ret = await axios.get(
    `https://articles.api.yle.fi/v2/articles.json?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&id=${articuladoId}`
  );

  const articulado = ret.data.data[0];

  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOM.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App articulado={articulado} />
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags();

    return [articulado, html, styleTags];

    // or sheet.getStyleElement();
  } catch (error) {
    // handle error
    console.error(error);
    throw error;
  } finally {
    sheet.seal();
  }
};

const run = async () => {
  const app = express();

  const raw = await fs.readFile("./webpack-stats.json");
  const json = JSON.parse(raw);

  console.log(json);

  const bundleUrls = json.entrypoints.main.assets.map(
    (asset) => `/dist/${asset.name}`
  );

  console.log(bundleUrls);

  app.use("/dist", express.static("dist"));

  app.get("/", (req, res) => {
    res.send("sugen Sie, bitte?");
  });

  app.get("/a/:articuladoId", async (req, res) => {
    console.log("render", render);

    try {
      const [articulado, tussenhofer, styleTags] = await render(
        req.params.articuladoId
      );

      res.send(`<!doctype html>
            <html dir="ltr" lang="fi">
              <head>
                  <title>Ribuls-ARSE</title>
                  ${styleTags}
              </head>
              <body>

              <button id="hydrado">hydrado!!!</button>
              <button id="renderado">renderado!!!</button>
              
              <div id="app">${tussenhofer}</div>

              <div id="app2"></div>
      
              <div id="state">${JSON.stringify(articulado)}</div>
      
              ${bundleUrls.map((bu) => `<script src="${bu}"></script>`)}
              <script src="/dist/main.js"></script>
              </body>
            </html>`);
    } catch (e) {
      console.log(e);
      res.send("Oh noes errores fatales");
    }
  });

  app.listen(3003, () => {
    console.log("LISTENING IN 3003");
  });
};

run();
