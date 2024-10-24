import { Box, IconButton, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Layout1 from "components/Dashboard-1/Layout1";
import React from "react";
import CaseCard from "./Card/CaseCard";
import SuggestedKnowledgeTable from "./Table/SuggestedKnowledgeTable";
import SupportTicketJourney from "./Chart/SupportTicketJourney";

const CaseSection = () => {
  const theme = useTheme();

  // that is for chart information start here
  // Data for the chart
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  // Options for the chart
  // const options = {
  //   title: "My Daily Activities",
  //   pieHole: 0.4, // Donut chart style
  // };
  // that is for chart information end here
  return (
    <Layout1>
      <Box className=" flex flex-col gap-y-3">
        {/* customer journey section  */}
        <Box className=" flex flex-col gap-y-3">
          {/* text  */}
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            Customer Journeys
          </Typography>

          {/* case card section  */}
          <Box>
            <CaseCard data={data} />
          </Box>
        </Box>

        {/* bottom section  */}
        <Box className=" grid grid-cols-1 xl:grid-cols-2 gap-3">
          {/* left section  */}
          <Box
            className=" px-6 py-4 rounded-3xl"
            sx={{ bgcolor: theme.palette.primary.cardLightBg }}
          >
            <Box>
              {/* top section  */}
              <Box>
                {/* text  */}
                <Box className=" md:flex items-center justify-between">
                  <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
                    Suggested Knowledge
                  </Typography>

                  {/* right side icon section  */}
                  <Box className=" flex items-center gap-x-2 mt-2 md:mt-0">
                    {/* icon 1  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    {/* icon 2  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <DriveFolderUploadIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                    {/* icon 3  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <CalendarTodayIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              {/* table section  */}
              <Box className=" mt-10">
                <SuggestedKnowledgeTable />
              </Box>
            </Box>
          </Box>
          {/* right section  */}
          <Box
            sx={{ bgcolor: theme.palette.primary.cardLightBg }}
            className=" px-6 py-4 rounded-3xl"
          >
            <Box>
              {/* top section  */}
              <Box>
                {/* text  */}
                <Box className="md:flex items-center justify-between ">
                  <Typography sx={{ fontSize: "25px" }}>
                    Support Ticket Journey
                  </Typography>
                  {/* right side icon section  */}
                  <Box className=" flex items-center gap-x-2 mt-2 md:mt-0">
                    {/* icon 1  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    {/* icon 2  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <DriveFolderUploadIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                    {/* icon 3  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <CalendarTodayIcon
                        sx={{ color: theme.palette.icon.iconColor }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              {/* chart section  */}
              <Box className=" mt-10 grid grid-cols-2 md:gap-2">
                {/* left  */}
                <Box className=" relative">
                  <SupportTicketJourney
                    data={[80, 20]}
                    colors={["#83A2DB", "#83A2DB"]}
                  />
                  <Box
                    className="absolute -top-2 md:top-0 left-24 md:left-12 lg:left-24 xl:left-14 2xl:left-24 h-11 w-11 rounded-full border-[1px] border-solid border-[rgba(255,255,255,0.2)] flex items-center justify-center "
                    sx={{
                      background: "rgba(255,255,255,0.2)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography>5</Typography>
                  </Box>
                </Box>

                {/* right  */}
                <Box className="relative ">
                  <SupportTicketJourney
                    data={[80, 20]}
                    colors={["#CE6969", "#CE6969"]}
                  />
                  <Box
                    className="absolute -top-2 md:top-0 left-24 md:left-12 lg:left-24 xl:left-14 2xl:left-24 h-11 w-11 rounded-full border-[1px] border-solid border-[rgba(255,255,255,0.2)] flex items-center justify-center "
                    sx={{
                      background: "rgba(255,255,255,0.2)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography>8</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout1>
  );
};

export default CaseSection;
