import React from "react";

import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import ChannelView from "../ChannelView";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title="Filipe's Server" />
      <ChannelList />
      <UserInfo userName="Filipe" userId={2368} />
      <ChannelInfo title="General" description="Channel open to chat" />
      <ChannelView />
      <UserList />
    </Container>
  );
};

export default Layout;
