import React from "react";

import ChannelInfo from "../ChannelInfo";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title="Filipe's Server" />
      <ChannelInfo title="General" description="Channel open to chat" />
    </Container>
  );
};

export default Layout;
