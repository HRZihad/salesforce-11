import { Box, IconButton, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TelegramIcon from "@mui/icons-material/Telegram";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();


    // Detect scroll event to toggle background color
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <Box
      sx={{
        // mt:  isScrolled &&  "100px",
        position: "sticky",
        top:  isScrolled &&  "78px", // Adjust this value to control how far from the top it should stick
        zIndex: 30,
      }}
      className="flex flex-col justify-between items-center pb-10 pt-[15px] min-h-[90vh]"
    >
      {/* top section  */}
      <Box className=" flex flex-col items-center gap-y-3">
        {/* back arrow icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        {/* share icon  */}
        <IconButton
        size="large"

          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <ShareIcon />
        </IconButton>
        {/* upload icon  */}
        <IconButton
        size="large"

          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <DriveFolderUploadIcon />
        </IconButton>
        {/* start icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <StarBorderIcon />
        </IconButton>
        {/* plus icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <AddIcon />
        </IconButton>
        {/* mobile icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <PhoneIphoneIcon />
        </IconButton>

        {/* storage icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <StorageIcon />
        </IconButton>

        {/* calender icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <CalendarTodayIcon />
        </IconButton>

        {/* TelegramIcon icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <TelegramIcon />
        </IconButton>

        {/* Warning icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <WarningAmberIcon />
        </IconButton>
      </Box>

      {/* bottom section  */}
      <Box className=" flex flex-col gap-y-2 ">
        {/* dark mode icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.lightIconBg,
            borderRadius: "100%",
          }}
        >
          <BedtimeIcon />
        </IconButton>

        {/* light mode icon  */}
        <IconButton
        size="large"
          sx={{
            // border: `1px solid ${theme.palette.primary.semiWhite}`,
            bgcolor: theme.palette.icon.darkIconBg,
            color: theme.palette.primary.semiWhite,
            borderRadius: "100%",
          }}
        >
          <LightModeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
