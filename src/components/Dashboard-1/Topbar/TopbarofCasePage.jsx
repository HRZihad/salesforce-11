import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { logo } from "assets/images";
import React, { useEffect, useMemo, useState } from "react";

import LayersIcon from "@mui/icons-material/Layers";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import TopbarsmCasePage from "./TopbarsmCasePage";

const TopbarofCasePage = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("");
  const [focused, setFocused] = useState(false);

  const tabs = useMemo(
    () => [
      "Relationship",
      "Opportunities",
      "Leads",
      "Calender",
      "Cases",
      "Reports",
      "Quotes",
    ],
    []
  );

  // const handleNavigate = (tab) => {
  //   setActiveTab(tab);
  //   console.log("this log from function", tab);

  //   if (tab) {
  //     navigate(`/${tab.toLowerCase()}`);
  //   } else {
  //     navigate(`/${tab.toLowerCase().replace(/\s+/g, "-")}`);
  //   }
  //   console.log("tab", activeTab);
  //   console.log("location", location.pathname);
  //   console.log("active tab", activeTab);

  // };
  const handleNavigate = (tab) => {
    setActiveTab(tab); // Update the tab state
    navigate(`/${tab.toLowerCase().replace(/\s+/g, "-")}`); // Navigate to the correct route
  };

  // Sync the active tab with the URL on route change
  useEffect(() => {
    const currentPath = location.pathname.substring(1).replace(/-/g, " ");
    const activeTabFromPath = tabs.find(
      (tab) => tab.toLowerCase() === currentPath.toLowerCase()
    );
    if (activeTabFromPath) {
      setActiveTab(activeTabFromPath);
    }
  }, [location.pathname, tabs]);

  return (
    <Box>
      {/* top header section for lg devices */}
      <Box className=" hidden xl:block py-3">
        <Box className="flex items-center justify-between ">
          {/* logo  */}
          <Box className="cursor-pointer flex items-center gap-2 w-[25%]">
            <LayersIcon sx={{ fontSize: "32px" }} />
            <Typography sx={{ fontSize: "30px" }}>
              <span className="font-bold">sugar</span>crm
            </Typography>
          </Box>

          {/* top tab section  */}
          <Box className="flex items-center justify-center gap-x-1 w-[50%]">
            {/* icon  */}

            {/* box  */}
            <Box
              className="px-1  rounded-3xl flex items-center gap-x-3"
              sx={{ bgcolor: "transparent" }}
            >
              {/* icon  */}

              {tabs.map((tab) => (
                <Typography
                  key={tab}
                  onClick={() => handleNavigate(tab)}
                  className={`px-4 py-3 rounded-[32px] cursor-pointer ${
                    activeTab === tab ? "bg-[#000000]" : ""
                  }`}
                  sx={{
                    color:
                      activeTab === tab
                        ? theme.palette.text.white
                        : theme.palette.text.black,
                    fontWeight: "500",
                  }}
                >
                  {tab}
                </Typography>
              ))}
            </Box>

            {/* icons */}
          </Box>

          {/* right section */}
          <Box className="flex items-center gap-x-2 w-[25%] justify-end">
            {/* icon */}
            <Box className="flex items-center">
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.semiWhite,
                  borderRadius: "100%",
                  opacity: focused ? 0 : 1,
                  visibility: focused ? "hidden" : "visible",
                  transition: " opacity 0.4s ease",
                }}
                onClick={() => setFocused(true)}
              >
                <SearchIcon sx={{ fontSize: "24px" }} />
              </IconButton>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                sx={{
                  width: focused ? { sm:"120px", md: "150px", xl:"200px" }  : "0px",
                  visibility: focused ? "visible" : "hidden",
                  opacity: focused ? 1 : 0,
                  transition: "width 0.4s ease, opacity 0.4s ease",
                  marginLeft: focused ? "10px" : "0px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", // Border color
                    },
                    "&:hover fieldset": {
                      borderColor: "",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid",
                      borderColor: theme.palette.primary.semiWhite,
                    },
                  },
                }}
                onBlur={() => setFocused(false)} // Close input when focus is lost
                onFocus={() => setFocused(true)} // Keep the input focused
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <NotificationsNoneIcon />
            </IconButton>
            {/* avatar */}
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/YcXc5Cg/1.png"
              sx={{ width: 48, height: 48 }}
            />
          </Box>
        </Box>
      </Box>

      {/* top header section for sm devices */}
      <Box className=" block  xl:hidden">
        <Box className=" flex items-center justify-between">
          {/* logo */}
          <Box className="cursor-pointer w-[150px]">
            <img src={logo} alt="logo" className="w-full"/>
          </Box>
          {/* sidebar for sm */}
          <Box>
            <TopbarsmCasePage />
          </Box>
        </Box>
      </Box>

      {/* children or content section */}
      <Box className=" mt-3">
        {/* {activeTab === "Estimates" && <EstimatesSection />} */}
        {/* {activeTab === "Invoices" && <InvoicesSection />} */}
        {/* {activeTab === "Payments" && <PaymentsSection />}
        {activeTab === "Recurring Invoices" && <PaymentsSection />}
        {activeTab === "Checkouts" && <CheckoutsSection />} */}
      </Box>
    </Box>
  );
};

export default TopbarofCasePage;
