import { color } from '@yleisradio/yds-core';
import styled from 'styled-components';
import { jsxs } from 'react/jsx-runtime';

const Article$1 = styled.article({
  padding: "1em",
  border: `5px dashed ${color.GREEN_50}`
});
const LivefeedTab = () => {
  return /*#__PURE__*/jsxs(Article$1, {
    children: ["tabbo de la livefeed! ", color.BLACK_OPACITY_10]
  });
};

const Article = styled.article({
  padding: "1em",
  border: `5px dashed ${color.PURPLE_40}`
});
const FullArticle = () => {
  return /*#__PURE__*/jsxs(Article, {
    children: ["articlo fullo ", color.PURPLE_10]
  });
};

const minimizeGraphQLQuery = something => something;

export { FullArticle, LivefeedTab, minimizeGraphQLQuery };
