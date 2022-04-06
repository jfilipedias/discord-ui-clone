import React from "react";

import {
  Container,
  Input,
  InputIcon,
  InputWrapper,
  MessageView,
} from "./styles";

const ChannelView: React.FC = () => {
  return (
    <Container>
      <MessageView />

      <InputWrapper>
        <Input placeholder="Send a message" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelView;
