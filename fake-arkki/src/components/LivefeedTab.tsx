import { FC } from "react";
import { color } from "@yleisradio/yds-core";
import styled from "styled-components";

const Article = styled.article({
  padding: "1em",
  border: `5px dashed ${color.GREEN_50}`
});

const LivefeedTab: FC = () => {
  return <Article>tabbo de la livefeed! {color.BLACK_OPACITY_10}</Article>;
};

export default LivefeedTab;
