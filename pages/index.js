import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button sx={{ backgroundColor: (theme) =>theme.palette.primary.main }} variant="text">Text</Button>
        <Button sx={{ backgroundColor: (theme) =>theme.palette.secondary.main }} classes="devendra" variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  )
}
