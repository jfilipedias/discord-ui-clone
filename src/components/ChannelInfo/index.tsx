import React from "react";

import {
  Title,
  Description,
  Container,
  HashtagIcon,
  Separator,
} from "./styles";

interface Props {
  title: string;
  description: string;
}

const ChannelInfo: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <Container>
      <HashtagIcon />

      <Title>{title}</Title>

      <Separator />

      <Description>{description}</Description>
    </Container>
  );
};

export default ChannelInfo;
