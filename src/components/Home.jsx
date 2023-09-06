import React from 'react';
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import {Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Archive from './archive/Archive';
import Archives from './archive/Archives';
import TrashNote from './trash/TrashNote';
import TrashNotes from './trash/TrashNotes';





const Home = () => {
  return (
    <Box style={{ display: 'flex' , width: '100%'}}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={ <Notes />} />
          <Route path="/archive" element={ <Archives />} />
          <Route path="/trash" element={ <TrashNotes />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default Home

