'use strict';

var jsxRuntime = require('react/jsx-runtime');

const LivefeedTab = () => {
  return /*#__PURE__*/jsxRuntime.jsx("article", {
    children: "tabbo de la livefeed!"
  });
};

const FullArticle = () => {
  return /*#__PURE__*/jsxRuntime.jsx("article", {
    children: "articulado!"
  });
};

const minimizeGraphQLQuery = something => something;

exports.FullArticle = FullArticle;
exports.LivefeedTab = LivefeedTab;
exports.minimizeGraphQLQuery = minimizeGraphQLQuery;
