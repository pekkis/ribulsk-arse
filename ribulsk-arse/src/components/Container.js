import styled from "styled-components";

import { politicalColors } from "@yleisradio/yds-core";

const Container = styled.main({
  margin: "0 auto",
  maxWidth: "1000px",
  border: `10px solid ${politicalColors.PARTY_FEM}`,
  padding: "1em",
});

export default Container;
