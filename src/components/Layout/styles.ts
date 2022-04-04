import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    "ServersList ServerName ChannelInfo ChannelInfo"
    "ServersList ChannelsList Chat UsersList"
    "ServersList UserInfo Chat UsersList";

  height: 100vh;
`;
