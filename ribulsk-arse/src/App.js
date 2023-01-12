import { Airplay, AirplayAudio } from "@yleisradio/yds-icons-react";
import { FullArticle } from "@yleisradio/arkki-web";

import Container from "./components/Container";

/*
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

            <Airplay />
      <AirplayAudio />


*/

const App = ({ articulado }) => {
  return (
    <Container>
      <Airplay />
      <AirplayAudio />

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
    </Container>
  );
};

export default App;
