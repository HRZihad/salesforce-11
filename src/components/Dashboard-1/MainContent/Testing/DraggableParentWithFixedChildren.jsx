import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme,
  } from "@mui/material";
  import React, { useState } from "react";
  import Draggable from "react-draggable";
  import Xarrow from "react-xarrows";
  import AddIcon from "@mui/icons-material/Add";
  import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
  import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
  import DoneAllIcon from "@mui/icons-material/DoneAll";
  import { alignProperty } from "@mui/material/styles/cssUtils";
  
  const DraggableParentWithFixedChildren = () => {
    const theme = useTheme();
    const [parentPosition, setParentPosition] = useState({ x: 0, y: 0 });
    const [outsideParentPosition, setOutsideParentPosition] = useState({
      x: 0,
      y: 0,
    });
  
    const handleParentDrag = (e, data) => {
      setParentPosition({ x: data.x, y: data.y });
    };
  
    const handleOutsideParentDrag = (e, data) => {
      setOutsideParentPosition({ x: data.x, y: data.y });
    };
  
    const HalfCircle = () => (
      <svg width="100" height="50" viewBox="0 0 100 50">
        <path d="M 0 50 A 50 50 0 0 1 100 50" fill="red" />
      </svg>
    );
  
    return (
      <Box className=" grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-4 gap-4 mt-4 bg-[#DBE5F2] py-5 px-4">
        {/* Draggable Parent for Outside Elements */}
        <Draggable
          position={outsideParentPosition}
          onDrag={handleOutsideParentDrag}
          className="flex flex-col h-full "
        >
          <Box style={outsideParentStyle}>
            <Box id="elementOutside1" style={draggableStyle1}>
              {/* empty content  */}
            </Box>
            <Box id="elementOutside2" style={draggableStyle2}>
              {/* empty content  */}
            </Box>
            <Box className="flex flex-col h-full">
              <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                Case Allocation
              </Typography>
              <Box
                className="  rounded-3xl flex-1"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.semiWhite,
                }}
              >
                <Box className=" flex flex-col gap-y-[60px] px-6 py-4">
                  <Box className=" flex items-center justify-between ">
                    {/* avatar  */}
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.ibb.co/YcXc5Cg/1.png"
                        sx={{ width: 50, height: 50 }}
                      />
                    </Box>
                    {/* icon section  */}
                    <Box className=" flex items-center gap-x-2">
                      <IconButton size="large">
                        <DoneAllIcon
                          sx={{
                            color: theme.palette.icon.iconColor,
                            fontSize: "18px",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        size="large"
                        sx={{
                          border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                          borderRadius: "100%",
                        }}
                      >
                        <CalendarTodayIcon
                          sx={{
                            color: theme.palette.icon.iconColor,
                            fontSize: "18px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography sx={{ color: theme.palette.text.black }}>
                    Allocate case to user
                  </Typography>
                </Box>
  
                {/* divider  */}
                <Divider variant="middle" />
  
                <Box className=" flex flex-col gap-y-[60px] px-6 py-4">
                  <Box className=" flex items-center justify-between ">
                    {/* avatar  */}
                    <Box>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.ibb.co/YcXc5Cg/1.png"
                        sx={{ width: 50, height: 50 }}
                      />
                    </Box>
                    {/* icon section  */}
                    <Box className=" flex items-center gap-x-2">
                      <IconButton size="large">
                        <DoneAllIcon sx={{ fontSize: "18px" }} />
                      </IconButton>
                      <IconButton
                        size="large"
                        sx={{
                          border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                          borderRadius: "100%",
                        }}
                      >
                        <CalendarTodayIcon
                          sx={{
                            color: theme.palette.icon.iconColor,
                            fontSize: "18px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography sx={{ color: theme.palette.text.black }}>
                    Acknowledge Case reciept to customer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Draggable>
        {/* Draggable Parent Element */}
        <Draggable
          position={parentPosition}
          onDrag={handleParentDrag}
          bounds={{ left: 0, right: 400, top: 0, bottom: 0 }}
          className="flex flex-col h-full"
        >
          <Box style={parentStyle}>
            <Box className="flex flex-col h-full">
              <Typography className="xxl:hidden pb-2" sx={{ fontWeight: "600" }}>
                Issue Identification
              </Typography>
              <Box
                className="  rounded-3xl flex-1"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.text.black,
                }}
              >
                <Box id="child1" className="flex items-center ">
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4 w-[100%]">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text  */}
                      <Box className=" flex w-[50%] items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Category
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box id="child2" className="flex items-center ">
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  <Box className=" px-6 py-4 w-[100%]">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text  */}
                      <Box className=" flex w-[50%] items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Category
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box id="child3" className="flex items-center ">
                  {/* circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4 w-[100%]">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar and text  */}
                      <Box className=" flex w-[50%] items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co/YcXc5Cg/1.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography sx={{ color: theme.palette.text.black }}>
                          Identify Issue Category
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
  
                <Box id="child4" className="flex items-center">
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar with text*/}
                      <Box className=" w-[70%] flex items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co.com/xfGjJyz/3.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            color: theme.palette.text.black,
                          }}
                        >
                          Advise Customer of Resolution estimate
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
  
                <Box id="child5" className="flex items-center">
                  {/* Circle */}
                  <Box className="h-4 w-4 bg-[#DBE5F2] rounded-full flex items-center justify-center -ml-2"></Box>
                  {/* Content of box 2 */}
                  <Box className=" px-6 py-4">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar with text*/}
                      <Box className=" w-[70%] flex items-center gap-x-2">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.ibb.co.com/nfFG5fL/4.png"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            color: theme.palette.text.black,
                          }}
                        >
                          Advise Customer of Resolution estimate
                        </Typography>
                      </Box>
                      {/* icon section  */}
                      <Box className=" flex items-center gap-x-2">
                        <IconButton size="large">
                          <DoneAllIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="large"
                          sx={{
                            border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                            borderRadius: "100%",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              color: theme.palette.icon.iconColor,
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Draggable>
  
        {/* Reversed Arrows: Arrows Connecting Outside 1 and Outside 2 to Children */}
        {/* Arrows from Outside 1 to First Three Children */}
        <Xarrow
          start="elementOutside1"
          end="child1"
          curveness={0.5}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
        />
        <Xarrow
          start="elementOutside1"
          end="child2"
          curveness={0.6}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
        />
        <Xarrow
          start="elementOutside1"
          end="child3"
          curveness={0.7}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
        />
  
        {/* Arrows from Outside 2 to Last Two Children */}
        <Xarrow
          start="elementOutside2"
          end="child3"
          curveness={0.5}
          color="#83A2DB"
          strokeWidth={1}
          headSize={6}
        />
        <Xarrow
          start="elementOutside2"
          end="child4"
          curveness={0.5}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
        />
        <Xarrow
          start="elementOutside2"
          end="child5"
          curveness={0.6}
          color="#CE6969"
          strokeWidth={1}
          headSize={6}
          headShape={"circle"}
        />
      </Box>
    );
  };
  
  const parentStyle = {
    width: "max-content",
    height: "max-content",
    position: "relative",
    display: "flex",
  
    flexDirection: "column",
    justifyContent: "space-between",
  };
  

  
  const outsideParentStyle = {
    width: "max-content",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  };
  
  const draggableStyle1 = {
    width: "20px",
    height: "20px",
    backgroundColor: "#DBE5F2",
  
    borderRadius: "100%",
    textAlign: "center",
    padding: "10px",
    cursor: "move",
    position: "absolute",
    right: "-10px",
    top: "28%",
    display: "flex",
    justifyContent: "center",
    alignProperty: "center",
  };
  const draggableStyle2 = {
    width: "20px",
    height: "20px",
    backgroundColor: "#DBE5F2",
    display: "flex",
    justifyContent: "center",
    alignProperty: "center",
    borderRadius: "100%",
    textAlign: "center",
    padding: "10px",
    cursor: "move",
    position: "absolute",
    right: "-10px",
    top: "70%",
  };
  
  export default DraggableParentWithFixedChildren;
  