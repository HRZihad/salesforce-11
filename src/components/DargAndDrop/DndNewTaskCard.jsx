import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const DndNewTaskCard = () => {
  const theme = useTheme();
  const [boxList, setBoxList] = useState([
    {
      id: "1",
      content: "Request Processing",
      boxId: 1,
      bgcolor: "#303030",
      color: "#fff",
      task: "child11",
    },
    {
      id: "2",
      content: "Problem Resolution",
      boxId: 2,
      bgcolor: "#F7FAFF",
      color: "#000",
      task: "child12",
    },
    {
      id: "3",
      content: "Customer Communication",
      boxId: 3,
      bgcolor: "#F7FAFF",
      color: "#000",
      task: "child13",
    },
    {
      id: "4",
      content: "Testing and Verification",
      boxId: 4,
      bgcolor: "#F7FAFF",
      color: "#000",
      task: "child13",
    },
    {
      id: "5",
      content: "Customer Notification",
      boxId: 5,
      bgcolor: "#F7FAFF",
      color: "#000",
      task: "child14",
    },
    {
      id: "6",
      content: "Customer Satisfaction",
      boxId: 6,
      bgcolor: "#F7FAFF",
      color: "#000",
      task: "child15",
    },
  ]);

  const swapBoxes = (fromBox, toBox) => {
    // Only update if the boxes are different
    if (fromBox.id !== toBox.id) {
      let boxes = [...boxList]; // Spread operator for immutability
      let fromIndex = boxes.findIndex((box) => box.id === fromBox.id);
      let toIndex = boxes.findIndex((box) => box.id === toBox.id);

      if (fromIndex !== -1 && toIndex !== -1) {
        // Immediate visual feedback
        [boxes[fromIndex], boxes[toIndex]] = [boxes[toIndex], boxes[fromIndex]]; // Swap the boxes
        setBoxList(boxes); // Trigger rerender
      }
    }
  };

  const handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = (data) => (event) => {
    event.preventDefault();
  };

  const handleDrop = (data) => (event) => {
    event.preventDefault();
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
    swapBoxes(fromBox, toBox); // Swap the boxes
  };

  const makeBoxes = () => {
    return (
      <>
        {boxList.map((box, index) => (
          <div
            key={box.id}
            className="box"
            style={{
              backgroundColor: box.bgcolor,
              color: box.color,
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease", // CSS transition for smoother drag effect
            }}
            draggable={true}
            onDragStart={handleDragStart({ id: box.id })}
            onDragOver={handleDragOver({ id: box.id })}
            onDrop={handleDrop({ id: box.id })}
          >
            <Box
              className="rounded-3xl px-6 py-4 flex items-center cursor-move content"
              id={box.task}
            >
              <Typography>{box.content}</Typography>
            </Box>
          </div>
        ))}
      </>
    );
  };

  return (
    <Box
      className="rounded-3xl h-full px-6 py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-3"
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.text.black,
      }}
    >
      {makeBoxes()}
    </Box>
  );
};

export default DndNewTaskCard;
