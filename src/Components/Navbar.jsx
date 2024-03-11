import React, { useState } from 'react';
import {HiOutlineBars3 } from "react-icons/hi2";
import{
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import  CommentRoundedIcon  from "@mui/icons-material/CommentRounded";
import  PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {

   const [openMenu,setOpenMenu] = useState(false)
   const menuOptions = [
      {
        text:"HOME",
        icon:<HomeIcon/>
      },
      {
        text:"ROOMS & SUITES",
        icon:<CommentRoundedIcon/>
      },
      {
        text:"DINING",
        icon:<InfoIcon/>
      },
      {
        text:"GALLERY",
        icon:<InfoIcon/>
      },
      {
        text:"CONTACTS",
        icon:<PhoneRoundedIcon/>
      },
      {
        text:"EN",
        icon:<InfoIcon/>
      },
      
   ];

  return  (
           <nav>
            <div> 
              <h1>
               UrbanVibe Hotel
              </h1>
              <p>Stay Vibrant, Stay Urban.</p>
            </div>
            <div className="navbar-links-container">
                <a href="">HOME</a>
                <a href="">ROOMS & SUITES</a>
                <a href="">DINING</a>
                <a href="">CONTACTS</a>
                <a href="">EN</a>
                <button className="primary-button">BOOK NOW</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
            anchor="right">
                <Box 
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => setOpenMenu(false)}
                  onKeyDown={() => setOpenMenu(false)}
                >
                   <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                   </List>
                </Box>
            </Drawer>
           </nav>
  );
};
  
export default Navbar;