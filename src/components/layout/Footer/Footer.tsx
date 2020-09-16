import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/foundations/variables';
import { Paragraph } from 'components/foundations';

const Wrapper = styled('footer')`
  padding-top: 24px;
  border-top: 1px solid ${colors.grey02};
`;

const Footer: React.SFC = () => (
  <Wrapper>
    <Paragraph margin={0}>
      <small>atas nama ❤️</small>
    </Paragraph>
  </Wrapper>
);

export default Footer;
