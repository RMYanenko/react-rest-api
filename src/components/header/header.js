import React from 'react';
import {HeaderBlock, HeaderLinks, HeaderTitle} from "./styles";

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        <a href="#">Game of Thrones DB</a>
      </HeaderTitle>
      <HeaderLinks>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Houses</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
      </HeaderLinks>
    </HeaderBlock>
  );
};

export default Header;
