import * as React from 'react';
import {List, ListItem,ListItemIcon, ListItemText} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import  LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import  ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import  DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";


const NavList = () => {

    const navlist = [
        { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, route: '/' },
        { id: 2, name: 'Archive', icon: <ArchiveOutlinedIcon />, route: '/archive'},
        { id: 3, name: 'Trash', icon: <DeleteOutlineOutlinedIcon />, route: '/trash' }
    ]

  return (
    <div>
      <List>
          {navlist.map(list => (
            <ListItem button key={list.id}>
                <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                  <ListItemIcon style={{ alignItems:  'center'}}>
                    {list.icon}
                  </ListItemIcon>
                  <ListItemText primary={list.name} />
                </Link>
              </ListItem>
          ))}
        </List>
    </div>
  )
}

export default NavList
