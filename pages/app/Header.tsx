import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';

import useScrollHeader from '~/shared/hooks/useScrollHeader';

const _AppBar = styled(AppBar)`
  transition: ${({ theme }) => {
    const duration = theme.transitions.duration.short;
    return `background-color ${duration}ms linear, box-shadow ${duration}ms linear`;
  }};
  ${({ elevation = 0 }) => elevation === 0 && `background-color: transparent;`};
`;

const Header = () => {
  const elevated = useScrollHeader();

  return (
    <_AppBar elevation={elevated ? 8 : 0}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Scroll to elevate App bar
        </Typography>
      </Toolbar>
    </_AppBar>
  );
};

export default Header;
