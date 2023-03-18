import { AppBar, styled, alpha, Toolbar, Typography,InputBase, Badge, Box, Divider, ListItemIcon } from '@mui/material'
import React, { useState } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
});

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Search = styled(Box)({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '5px',
  width: "25%",
  display: 'flex'

});

const Navbar = () => {
  const[open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h5' sx={{ display: {xs: "none", sm: "block"}}}>Welcome</Typography>
            <AdbIcon sx={{ display: {sm: "none", xs: "block"}}} />
            <Search sx={{ display: {xs: "none", sm: "block"}, width: {sm: '40%'} }}>
              <ManageSearchIcon color='success' sx={{ verticalAlign:'text-top' }}/><InputBase placeholder='Search...'/>
            </Search>
            <Stack direction="row">
              <Tooltip title="" arrow>
                <Avatar {...stringAvatar('Amresh Ranjan')} onClick={handleClick}/>
              </Tooltip>
            </Stack>
            <Menu
              id="basic-menu"
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{ marginTop: {xs: '50px', sm: '55px'}}}
            >
              <MenuItem onClick={handleClose} sx={{ gap:'15px' }}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ gap:'15px' }}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
