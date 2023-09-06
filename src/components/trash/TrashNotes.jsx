import React, {useContext} from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DataContext } from '../../context/DataProvider'
import TrashNote from './TrashNote'


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}))
const TrashNotes = () => {
const { deletedNotes }  = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex'}}>
        <Box component="main" sx={{ flexGrow: 1, p:3 }}>
            <DrawerHeader />
                <Grid container style={{ marginTop: 16 }}>
              {
                deletedNotes.map(note => (
                  <Grid item>
                  <TrashNote note={note} />
                  </Grid>
                ))
               }
              </Grid>
        </Box>
    </Box>
  )
}

export default TrashNotes
