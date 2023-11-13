import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';

function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header title={'DASHBOARD'} subTitle={'Welcome to your dashboard'}/>
    </Box>
  );
}

export default Dashboard;
