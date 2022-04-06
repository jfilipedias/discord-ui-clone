import React, { useEffect, useRef } from "react";

import ChannelMessage from "../ChannelMessage";
import { Mention } from "../ChannelMessage/styles";
import {
  Container,
  Input,
  InputIcon,
  InputWrapper,
  MessageView,
} from "./styles";

const ChannelView: React.FC = () => {
  const messageRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <MessageView ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Filipe Dias"
            date="04/06/2020"
            content="Hey guys, how are you doing?"
          />
        ))}

        <ChannelMessage
          author="Linux Updater"
          date="04/06/2020"
          content={
            <>
              <Mention>@Filipe Dias</Mention>, a new update is available.
            </>
          }
          hasMention
          isBot
        />
      </MessageView>

      <InputWrapper>
        <Input type="text" placeholder="Send a message" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelView;
