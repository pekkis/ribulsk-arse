import { FC } from "react";
import { color } from "@yleisradio/yds-core";
import styled from "styled-components";

const Article = styled.article({
  padding: "1em",
  border: `5px dashed ${color.PURPLE_40}`
});

const FullArticle: FC = () => {
  return <Article>articlo fullo {color.PURPLE_10}</Article>;
};

export default FullArticle;
