import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { styled } from '@mui/material/styles'
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import { RestoreFromTrashOutlined as Restore , DeleteForeverOutlined as Trash } from "@mui/icons-material";


const StyleCard = styled(Card)`
width: 240px;
margin: 8px;
box-shadow: none;
border: 1px solid #e0e0e0;
border-radius: 8px;
`


const TrashNote = ({ note }) => {


  const { notes, setNotes, setArchiveNotes, deletedNotes, setDeletedNotes } = useContext(DataContext); 

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
    setDeletedNotes(updatedNotes);
    setNotes(prevArr => [note, ...prevArr]);
  }

  const deleteNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setDeletedNotes(updatedNotes);
  }


  return (
    <StyleCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
            <Delete 
              fontSize="small"
              onClick={() => deleteNote(note)}
            />
            <Restore
            fontSize="small"
            style={{ marginLeft: 'auto'}} 
            onClick={() => restoreNote(note)}
            />
        </CardActions>
    </StyleCard>
  );
};

export default TrashNote;