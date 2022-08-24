import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Utilities } from "../../components/Utilities";
import { ButtonsBudget } from "../../components/ButtonsBudget";
import { ListComponent } from "../../components/List";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Inventory(){
    return(
        <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>  </Item>
          <Item>  </Item>
          <Item>  </Item>
          <Item>  </Item>
        </Stack>
      </Box>
    )
}