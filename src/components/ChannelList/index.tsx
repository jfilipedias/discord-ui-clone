import React from "react";

import ChannelButton from "../ChannelButton";
import { AddIcon, Category, Container } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <AddIcon />
      </Category>

      <ChannelButton channelName="General" selected />
      <ChannelButton channelName="Coding" />
      <ChannelButton channelName="LoL" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="CSGo" />
    </Container>
  );
};

export default ChannelList;
