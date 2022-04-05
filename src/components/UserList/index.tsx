import React from "react";

import UserRow from "../UserRow";
import { Container, Role } from "./styles";

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow nickname="Filipe Dias" />

      <Role>Offline - 15</Role>
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
};

export default UserList;
