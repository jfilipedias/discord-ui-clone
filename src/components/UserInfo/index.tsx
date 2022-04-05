import React from "react";

import {
  Avatar,
  Container,
  HeadphoneIcon,
  Icons,
  MicIcon,
  Profile,
  SettingsIcon,
  UserData,
} from "./styles";

interface Props {
  userName: string;
  userId: number;
}

const UserInfo: React.FC<Props> = ({ userName, userId }: Props) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{userName}</strong>
          <span>#{userId}</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
