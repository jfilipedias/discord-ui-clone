import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

interface Props {
  title: string;
}

const ServerName: React.FC<Props> = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>

      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
