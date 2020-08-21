import React from 'react';

import { Container,ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src= "https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4"/>
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon/>
    </Container>
  );
}

export default MobileHeader;



      


