import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';


const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Box marginLeft={20}>
        <Grid container marginTop={8}>
          <Grid item xs={12}>
          <Typography>Home</Typography>
          </Grid>

        </Grid>

      </Box>
      
      
    </DefaultLayout>
  );
};

export default Home;