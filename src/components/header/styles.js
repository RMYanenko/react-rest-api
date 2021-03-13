import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
HeaderBlock.displayName = "HeaderBlock";

export const HeaderTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

HeaderTitle.displayName = "HeaderTitle";

export const HeaderLinks = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: #fff;
  list-style-type: none;
  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;
HeaderLinks.displayName = "HeaderLinks";
