import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { logo } from "assets/images";
import React, { useEffect, useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RoofingIcon from "@mui/icons-material/Roofing";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useLocation, useNavigate } from "react-router-dom";
import TopbarSm from "./TopbarSm";

const Topbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("");

  const tabs = ["Cases", "Invoices", "Checkouts", "Payments", "Testing"];

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
    setActiveTab(tab);  // Update the tab state
    navigate(`/${tab.toLowerCase().replace(/\s+/g, "-")}`);  // Navigate to the correct route
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
      <Box className=" hidden lg:block">
        <Box className="flex items-center justify-between ">
          {/* logo  */}
          <Box className="cursor-pointer">
            <img src={logo} alt="logo" width={180} />
          </Box>

          {/* top tab section  */}
          <Box className="flex items-center gap-x-1">
            {/* icon  */}
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
              }}
            >
              <SpaceDashboardIcon />
            </IconButton>

            {/* box  */}
            <Box className="px-1 py-1 rounded-3xl flex items-center gap-x-3" sx={{ bgcolor: theme.palette.primary.cardBg }}>
              {/* icon  */}
              <IconButton
                sx={{
                  bgcolor: theme.palette.primary.semiWhite,
                  borderRadius: "100%",
                }}
              >
                <SpaceDashboardIcon />
              </IconButton>
              {tabs.map((tab) => (
                <Typography
                  key={tab}
                  onClick={() => handleNavigate(tab)}
                  className={`px-3 py-1 rounded-3xl cursor-pointer ${activeTab === tab  ? "bg-[#DFFE23]" : ""}`}
                  sx={{
                    color: activeTab === tab ? theme.palette.primary.white : theme.palette.primary.semiWhite,
                  }}
                >
                  {tab}
                </Typography>
              ))}
            </Box>

            {/* icons */}
            <IconButton 
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <EventNoteIcon />
            </IconButton>
            <IconButton 
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <LocalAtmIcon />
            </IconButton>
            <IconButton 
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <RoofingIcon />
            </IconButton>
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <FeaturedPlayListIcon />
            </IconButton>
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <FactCheckIcon />
            </IconButton>
            <IconButton 
              sx={{
                border: `1px solid ${theme.palette.primary.semiWhite}`,
                borderRadius: "100%",
                display: { md: "none", lg: "flex"}
              }}
            >
              <PeopleOutlineIcon />
            </IconButton>
          </Box>

          {/* right section */}
          <Box className="flex items-center gap-x-2">
            {/* icon */}
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.semiWhite,
                borderRadius: "100%",
              }}
            >
              <SettingsIcon />
            </IconButton>
            {/* avatar */}
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 48, height: 48 }} />
          </Box>
        </Box>
      </Box>

      {/* top header section for sm devices */}
      <Box className=" block  lg:hidden">
        <Box className=" flex items-center justify-between">
          {/* logo */}
          <Box className="cursor-pointer">
            <img src={logo} alt="logo" />
          </Box>
          {/* sidebar for sm */}
          <Box>
            <TopbarSm/>
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

export default Topbar;
