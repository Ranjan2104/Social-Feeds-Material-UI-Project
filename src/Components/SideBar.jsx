import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import GradeIcon from '@mui/icons-material/Grade';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ThreePIcon from '@mui/icons-material/ThreeP';
import Switch from '@mui/material/Switch';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const SideBar = ({ mode, setMode }) => {
  const[dark, setDark] = useState(false);
  const hadleChange = () => {
    setDark(!dark);
    setMode(mode === "light" ? "dark" : "light");
  }
  return (
    <Box p={2} sx={{ display: {xs: "none", sm: "block" }, flex: {sm: '2', md: '1'} }} >
      <Box sx={{ position: 'fixed' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="b" href='#page'>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>
         
        <ListItem disablePadding>
          <ListItemButton component="c" href='#groups'>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="d" href='#favorite'>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Favorite"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="e" href='#friends'>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="f" href='#settings'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="g" href='#profile'>
            <ListItemIcon>
              <ThreePIcon />
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="h" href='#mode'>
            <ListItemIcon>
              {dark ? <Brightness2Icon /> : <WbSunnyIcon />}
            </ListItemIcon>
            <Switch color="error" onClick={hadleChange}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default SideBar
