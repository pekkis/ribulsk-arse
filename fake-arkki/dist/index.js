import { jsx } from 'react/jsx-runtime';

const LivefeedTab = () => {
  return /*#__PURE__*/jsx("article", {
    children: "tabbo de la livefeed!"
  });
};

const FullArticle = () => {
  return /*#__PURE__*/jsx("article", {
    children: "articulado!"
  });
};

const minimizeGraphQLQuery = something => something;

export { FullArticle, LivefeedTab, minimizeGraphQLQuery };
