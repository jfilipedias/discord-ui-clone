import React from "react";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title="Filipe's Server" />
    </Container>
  );
};

export default Layout;
