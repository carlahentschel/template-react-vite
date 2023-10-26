import { Box, Grid } from '@mui/material';
import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import Form from '../components/Form';
import List from '../components/List';


const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Box marginLeft={20}>
        <Grid container marginTop={8}>
          <Grid item xs={12}>
            <Form />
            <List />
          </Grid>

        </Grid>

      </Box>
      
      
    </DefaultLayout>
  );
};

export default Home;