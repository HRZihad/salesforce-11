import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Avatar, Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import update from "immutability-helper";
import { DndCard } from "components/DargAndDrop/DndCard";
import { DndTaskCard } from "components/DargAndDrop/DndTaskCard";

const style = {
  width: "100%",
};

// Constants for drag and drop
const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  return (
    <Box ref={ref} className="px-6 py-4 relative" style={{ cursor: "move" }}>
      <Box className="flex items-center justify-between">
        <Box className="w-5 h-5 rounded-full absolute -left-3 hidden lg:block" sx={{ bgcolor: "#E0E0E0" }}>
          <div className="w-3 h-3 rounded-full bg-[#83A2DB] m-1" />
        </Box>
        <Box className="flex w-[50%] items-center gap-x-2">
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 50, height: 50 }} />
          <Typography sx={{ color: "#000" }}>{item.label}</Typography>
        </Box>
        <Box className="flex items-center gap-x-2">
          <IconButton size="large">
            <DoneAllIcon sx={{ color: "#000", fontSize: "18px" }} />
          </IconButton>
          <IconButton size="large" sx={{ border: "1px solid #ccc", borderRadius: "100%" }}>
            <CalendarTodayIcon sx={{ color: "#000", fontSize: "18px" }} />
          </IconButton>
        </Box>
        <Box className="w-5 h-5 rounded-full absolute -right-3 hidden lg:block" sx={{ bgcolor: "#E0E0E0" }}>
          <div className="w-[6px] h-[6px] rounded-full bg-[#83A2DB] m-2" />
        </Box>
      </Box>
    </Box>
  );
};

const DroppableArea = ({ items, moveItem }) => {
  const [, ref] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      const draggedIndex = item.index;
      const hoverIndex = items.findIndex((i) => i.id === item.id); // Find the index of the hovered item

      if (draggedIndex === hoverIndex) {
        return; // Do nothing if the item is dropped on the same index
      }

      moveItem(draggedIndex, hoverIndex); // Move the item
      item.index = hoverIndex; // Update the dragged item's index
    },
  });

  return (
    <Box ref={ref}>
      {items.map((item, index) => (
        <DraggableItem key={item.id} item={item} index={index} moveItem={moveItem} />
      ))}
    </Box>
  );
};

const CaseCard = () => {
  // const [items, setItems] = useState([
  //   { id: "item-1", label: "Identify Issue Category" },
  //   { id: "item-2", label: "Identify Issue Severity" },
  //   { id: "item-3", label: "Identify Issue Impact" },
  //   { id: "item-4", label: "Allocate to Resolution Team" },
  //   { id: "item-5", label: "Advise Customer of Resolution Estimate" },
  // ]);
  const [cards, setCards] = useState([
    { id: 1, label: "Identify Issue Category", IssueIdentification: true },
    { id: 2, label: "Identify Issue Severity", IssueIdentification: true },
    { id: 3, label: "Identify Issue Impact", IssueIdentification: true },
    { id: 4, label: "Allocate to Resolution Team", IssueIdentification: true },
    { id: 5, label: "Advise Customer of Resolution Estimate", IssueIdentification: true },
  ]);

  const [firstBox, setFirstBox] = useState([
    { id: 1, label: "Allocate case to user", CaseAllocation: true },
    { id: 2, label: "Acknowledge Case receipt to customer", CaseAllocation: true },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  // that is for first box 
  const moveFirstBoxCard = useCallback((dragIndex, hoverIndex) => {
    setFirstBox((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  // that is for second box section
  const renderCard = useCallback((card, index) => {
    return <DndCard key={card.id} IssueIdentification={card.IssueIdentification} index={index} id={card.id} label={card.label} moveCard={moveCard} />;
  }, []);

  // that is for first box section
  const renderFirstCard = useCallback((card, index) => {
    return <DndTaskCard key={card.id} CaseAllocation={card.CaseAllocation} index={index} id={card.id} label={card.label} moveFirstBoxCard={moveFirstBoxCard} />;
  });

  // const moveItem = (fromIndex, toIndex) => {
  //   const updatedItems = [...items];
  //   const [movedItem] = updatedItems.splice(fromIndex, 1);
  //   updatedItems.splice(toIndex, 0, movedItem);
  //   setItems(updatedItems);
  // };

  // that is for drag and drop end here
  // all for first and second box connection start here
  const blueOneRootRef = useRef(null); // root one
  const blueSecondRootRef = useRef(null); // root second
  const blueOneFirstChildrenRef = useRef(null); // root one first children
  const blueOneSecondChildrenRef = useRef(null); // root one second children
  const blueOneThirdChildrenRef = useRef(null); // root one third children
  const blueSecondFourthChildrenRef = useRef(null); // root two first children
  const blueSecondFiveChildrenRef = useRef(null); // root two second children
  // all for first and second box connection end here

  const [position, setPosition] = useState({
    // all for first and second box connection start here
    blueRoot: { x: 0, y: 0 }, // First task root
    blueSecondRoot: { x: 0, y: 0 }, // Second task root
    blueFirstChild: { x: 0, y: 0 },
    blueSecondChild: { x: 0, y: 0 },
    blueThirdChild: { x: 0, y: 0 },
    blueFourthChild: { x: 0, y: 0 },
    blueFiveChild: { x: 0, y: 0 },
    // all for first and second box connection end here
  });

  useEffect(() => {
    const updatePosition = () => {
      // all for first and second box connection start here
      // Update root and all children positions
      if (blueOneRootRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueRoot: getDivCenter(blueOneRootRef.current),
        }));
      }

      // second root update
      if (blueSecondRootRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueSecondRoot: getDivCenter(blueSecondRootRef.current), // Use blueSecondRootRef
        }));
      }

      if (blueOneFirstChildrenRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueFirstChild: getDivCenter(blueOneFirstChildrenRef.current),
        }));
      }

      if (blueOneSecondChildrenRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueSecondChild: getDivCenter(blueOneSecondChildrenRef.current),
        }));
      }

      if (blueOneThirdChildrenRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueThirdChild: getDivCenter(blueOneThirdChildrenRef.current),
        }));
      }

      // second root first children
      if (blueSecondFourthChildrenRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueFourthChild: getDivCenter(blueSecondFourthChildrenRef.current),
        }));
      }

      // second root second children
      if (blueSecondFiveChildrenRef.current) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          blueFiveChild: getDivCenter(blueSecondFiveChildrenRef.current), // correct
        }));
      }
      // all for first and second box connection end here
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const getDivCenter = (div) => {
    const rect = div.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  };

  const theme = useTheme();




  return (
    <Box className=" flex flex-col gap-y-4 ">
      {/* card content section */}
      <Box className=" flex items-center justify-center">
        <Box
          className="  rounded-[35px] overflow-hidden w-full " // there will be changed******
          sx={{ bgcolor: theme.palette.primary.cardLightBg }}
        >
          <Box className="lg:flex w-full ">
            <Box className="flex-2 bg-[#E8F1FF] lg:w-[40%]">
              <Box
                className=" h-full lg:rounded-tr-[20px] pl-6 md:pl-8  lg:px-10 py-6"
                sx={{
                  color: theme.palette.text.black,
                  bgcolor: theme.palette.primary.cardLightBg,
                }}
              >
                <Typography sx={{ fontSize: "23px", fontWeight: "600", mt: "5px" }}>New Case Management</Typography>
              </Box>
            </Box>

            {/* middle section  */}
            <Box className="flex-[1.5] w-auto lg:bg-[#E8F1FF] lg:rounded-bl-[30px] lg:rounded-br-[30px] ml-3 md:ml-5 lg:ml-0  px-4">
              <Box className=" flex items-center lg:justify-center">
                {/* middle tab section here  */}
                <Box className=" flex items-center gap-x-2 mb-2">
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#83A2DB",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        2
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/GPrhFkv/2.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#83A2DB",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        1
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/xfGjJyz/3.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        1
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/nfFG5fL/4.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        3
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/8KLgrT2/5.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EEF1F7",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.black,
                          fontSize: "15px",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/HNvMtzP/6.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EA6863",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.white,
                          fontSize: "15px",
                        }}
                      >
                        2
                      </Box>
                    </Box>
                  </Box>
                  <Box className=" flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/RjY0Tzt/7.png" sx={{ width: 50, height: 50 }} />
                    <Box className=" p-[2px] bg-white rounded-full">
                      <Box
                        className=" rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: "#EEF1F7",
                          width: "20px",
                          height: "20px",
                          color: theme.palette.text.black,
                          fontSize: "15px",
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  {/* <Avatar alt="Travis Howard" src="https://i.ibb.co.com/GPrhFkv/2.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/xfGjJyz/3.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/nfFG5fL/4.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/8KLgrT2/5.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/HNvMtzP/6.png" />
                  <Avatar alt="Cindy Baker" src="https://i.ibb.co.com/RjY0Tzt/7.png" /> */}
                </Box>
              </Box>
            </Box>
            {/* right side  */}
            <Box className="flex-2 bg-[#E8F1FF] w-[40%]">
              <Box className=" h-full lg:rounded-tl-[20px]" sx={{ bgcolor: theme.palette.primary.cardLightBg }}>
                <Box className=" flex items-center lg:justify-end pl-4 md:pl-6 lg:pl-0 lg:px-6 py-3" sx={{ color: theme.palette.primary.semiWhite }}>
                  {/* right side icon section  */}
                  <Box className=" flex items-center gap-x-2">
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
                      <DriveFolderUploadIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    {/* icon 3  */}
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <CalendarTodayIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* card content section  */}
          <Box className="px-[30px] mb-5">
            {/* card content section will be here  */}
            <Box className=" grid grid-cols-1 xl:grid-cols-4 gap-x-14 gap-y-4 mt-4">
              {/* box 1  */}
              <Box className="flex flex-col h-full">
                <Typography className="xl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Case Allocation
                </Typography>
                <Box
                  className="  rounded-3xl flex-1"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.semiWhite,
                  }}
                >
                  <DndProvider backend={HTML5Backend}>
                    <div style={style}>{firstBox.map((card, i) => renderFirstCard(card, i))}</div>
                  </DndProvider>
                </Box>
              </Box>

              {/* that is for curve line path section  */}
              {/* SVG for connecting curved lines */}
              {/* <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
           
                <path
                  d={`M${position.blueRoot.x},${position.blueRoot.y} 
    C${(position.blueRoot.x + position.blueFirstChild.x) / 2},${position.blueRoot.y} 
    ${(position.blueRoot.x + position.blueFirstChild.x) / 2},${position.blueFirstChild.y} 
    ${position.blueFirstChild.x},${position.blueFirstChild.y}`}
                  stroke="#83A2DB"
                  fill="transparent"
                  strokeWidth="1"
                />

             
                <path
                  d={`M${position.blueRoot.x},${position.blueRoot.y} 
    C${(position.blueRoot.x + position.blueSecondChild.x) / 2},${position.blueRoot.y} 
    ${(position.blueRoot.x + position.blueSecondChild.x) / 2},${position.blueSecondChild.y} 
    ${position.blueSecondChild.x},${position.blueSecondChild.y}`}
                  stroke="#83A2DB"
                  fill="transparent"
                  strokeWidth="1"
                />

           
                <path
                  d={`M${position.blueRoot.x},${position.blueRoot.y} 
    C${(position.blueRoot.x + position.blueThirdChild.x) / 2},${position.blueRoot.y} 
    ${(position.blueRoot.x + position.blueThirdChild.x) / 2},${position.blueThirdChild.y} 
    ${position.blueThirdChild.x},${position.blueThirdChild.y}`}
                  stroke="#83A2DB"
                  fill="transparent"
                  strokeWidth="1"
                />
     
                <path
                  d={`M${position.blueSecondRoot.x},${position.blueSecondRoot.y} 
    C${(position.blueSecondRoot.x + position.blueThirdChild.x) / 2},${position.blueSecondRoot.y} 
    ${(position.blueSecondRoot.x + position.blueThirdChild.x) / 2},${position.blueThirdChild.y} 
    ${position.blueThirdChild.x},${position.blueThirdChild.y}`}
                  stroke="#83A2DB"
                  fill="transparent"
                  strokeWidth="1"
                />


                <path
                  d={`M${position.blueSecondRoot.x},${position.blueSecondRoot.y} 
C${(position.blueSecondRoot.x + position.blueFourthChild.x) / 2},${position.blueSecondRoot.y} 
${(position.blueSecondRoot.x + position.blueFourthChild.x) / 2},${position.blueFourthChild.y} 
${position.blueFourthChild.x},${position.blueFourthChild.y}`}
                  stroke="#EA6863"
                  fill="transparent"
                  strokeWidth="1"
                />

              
                <path
                  d={`M${position.blueSecondRoot.x},${position.blueSecondRoot.y} 
C${(position.blueSecondRoot.x + position.blueFiveChild.x) / 2},${position.blueSecondRoot.y} 
${(position.blueSecondRoot.x + position.blueFiveChild.x) / 2},${position.blueFiveChild.y} 
${position.blueFiveChild.x},${position.blueFiveChild.y}`}
                  stroke="#EA6863"
                  fill="transparent"
                  strokeWidth="1"
                />

          
              </svg> */}

              {/* box 2 */}
              <Box className="flex flex-col h-full">
                <Typography className="xl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Issue Identification
                </Typography>
                <Box className="rounded-3xl flex-1" sx={{ bgcolor: "primary.main", color: "text.black" }}>
                  <DndProvider backend={HTML5Backend}>
                    <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
                  </DndProvider>
                </Box>
              </Box>

              {/* box 3 */}
              <Box className="flex flex-col h-full">
                <Typography className="xl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  Technical Resolution
                </Typography>
                <Box
                  className="  rounded-3xl px-6 py-4 flex flex-1 flex-col gap-y-[37px]"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.text.black,
                  }}
                >
                  {/* 3rd box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>Identify Issue Dependencies</Typography>
                  </Box>
                  {/* 3st box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>Identify Issue Resolution</Typography>
                  </Box>
                  {/* 3rd box content with avatar  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    {/* avatar  */}
                    <Box>
                      <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/RjY0Tzt/7.png" sx={{ width: 50, height: 50 }} />
                    </Box>
                    <Typography sx={{ fontWeight: "600" }}>Estimate Resolution Time</Typography>
                  </Box>
                  {/* 3rd box content with avatar  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    {/* avatar  */}
                    <Box>
                      <Avatar alt="Remy Sharp" src="https://i.ibb.co.com/HNvMtzP/6.png" sx={{ width: 50, height: 50 }} />
                    </Box>
                    <Typography sx={{ color: theme.palette.text.black }}>Advice Customer of Resolution Estimate</Typography>
                  </Box>
                  {/* 3rd box content  */}
                  <Box className=" flex items-center gap-x-2 w-[80%]">
                    <IconButton
                      sx={{
                        border: `1px solid ${theme.palette.primary.darkSemiWhite}`,
                        borderRadius: "100%",
                      }}
                    >
                      <AddIcon sx={{ color: theme.palette.icon.iconColor }} />
                    </IconButton>
                    <Typography sx={{ color: theme.palette.text.black }}>Identify Issue Resolution</Typography>
                  </Box>
                </Box>
              </Box>

              {/* box 4 */}
              <Box className="flex flex-col h-full">
                <Typography className="xl:hidden pb-2" sx={{ fontWeight: "600" }}>
                  New Task
                </Typography>
                <Box
                  className="  rounded-3xl flex-1 px-6 py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-3"
                  sx={{
                    // bgcolor: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: theme.palette.text.black,
                  }}
                >
                  {/* box 4 content  */}
                  <Box
                    className=" rounded-3xl px-6 py-4 flex items-center"
                    sx={{
                      bgcolor: theme.palette.primary.cardBg,
                      color: theme.palette.text.white,
                    }}
                  >
                    <Typography>Request Processing</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box className=" rounded-3xl px-6 py-4 flex items-center" sx={{ bgcolor: theme.palette.primary.main }}>
                    <Typography>Problem Resolution</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box className=" rounded-3xl px-6 py-4 flex items-center" sx={{ bgcolor: theme.palette.primary.main }}>
                    <Typography>Customer Communication</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box className=" rounded-3xl px-6 py-4 flex items-center" sx={{ bgcolor: theme.palette.primary.main }}>
                    <Typography>Testing and Verification</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box className=" rounded-3xl px-6 py-4 flex items-center" sx={{ bgcolor: theme.palette.primary.main }}>
                    <Typography>Customer Notification</Typography>
                  </Box>
                  {/* box 4 content  */}
                  <Box className=" rounded-3xl px-6 py-4 flex items-center" sx={{ bgcolor: theme.palette.primary.main }}>
                    <Typography>Customer Satisfaction</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* card bottom content section will be here  */}
            <Box className="hidden xl:grid grid-cols-4 gap-4 mt-10  ">
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>Case Allocation</Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>Issue Identification</Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>Technical Resolution</Typography>
              </Box>
              <Box className=" flex items-center justify-center">
                <Typography sx={{ fontWeight: "600" }}>New Task</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaseCard;
