"use strict";

var ydsCore = require("@yleisradio/yds-core");
var styled = require("styled-component");
var jsxRuntime = require("react/jsx-runtime");

const Article$1 = styled.article({
  padding: "1em",
  border: `5px dashed ${ydsCore.color.GREEN_50}`
});
const LivefeedTab = () => {
  return /*#__PURE__*/ jsxRuntime.jsxs(Article$1, {
    children: ["tabbo de la livefeed! ", ydsCore.color.BLACK_OPACITY_10]
  });
};

const Article = styled.article({
  padding: "1em",
  border: `5px dashed ${ydsCore.color.PURPLE_40}`
});
const FullArticle = () => {
  return /*#__PURE__*/ jsxRuntime.jsxs(Article, {
    children: ["articlo fullo ", ydsCore.color.PURPLE_10]
  });
};

const minimizeGraphQLQuery = (something) => something;

exports.FullArticle = FullArticle;
exports.LivefeedTab = LivefeedTab;
exports.minimizeGraphQLQuery = minimizeGraphQLQuery;
