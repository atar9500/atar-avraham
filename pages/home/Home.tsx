import { Box, Container } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        {[...new Array(100)]
          .map(
            () =>
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non natus ex sapiente esse magni aliquam distinctio, eaque dolore deserunt, alias, animi quidem debitis nemo architecto saepe ducimus sit voluptas!`
          )
          .join('\n')}
      </Box>
    </Container>
  );
};

export default Home;
