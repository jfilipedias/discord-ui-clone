import React from "react";

import { Avatar, Container } from "./styles";

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }: Props) => {
  return (
    <Container>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </Container>
  );
};

export default UserRow;
