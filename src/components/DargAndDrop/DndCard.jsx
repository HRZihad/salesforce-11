// Card.js
import { useDrag, useDrop } from "react-dnd";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import DoneAllIcon from "@mui/icons-material/DoneAll";

const ItemType = "CARD";

export const DndCard = ({ id, index,  moveCard, task, label, IssueIdentification, firstBox }) => {
  const theme = useTheme();
  // console.log("label", label);
  // console.log("staus", IssueIdentification);
  // console.log("firstBox", firstBox);
  console.log("task", task);
  

  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index; // Update the item's index
      }
    },
  });

  return (
    <>
    {IssueIdentification && (
    <Box
      ref={(node) => ref(drop(node))}
      sx={{
        // border: '1px solid #ccc',
        // padding: 2,
        // margin: 1,
        // backgroundColor: '#fff',
        cursor: "move",
        // boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* <Typography>{label}</Typography> */}
      <Box className="flex flex-col h-full">
        <Box className="rounded-3xl flex-1" sx={{ bgcolor: "primary.main", color: "text.black" }}>
          {/* item 1 */}
          <Box className=" px-6 xl:px-0 py-4 relative" id={task}>
            <Box className=" flex items-center justify-between ">
              {/* there will be the connected box  */}
              <Box
                className=" w-5 h-5 rounded-full  -ml-3 hidden lg:block"
                sx={{
                  bgcolor: theme.palette.primary.cardLightBg,
                }}
              >
                
              </Box>
              {/* avatar and text  */}
              <Box className=" flex w-[50%] items-center gap-x-2">
                <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 50, height: 50 }} />
                <Typography sx={{ color: theme.palette.text.black }}>{label}</Typography>
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
              {/* there will be the right side connected box  */}
              <Box
                className=" w-5 h-5 rounded-full -mr-3 hidden lg:block"
                sx={{
                  bgcolor: theme.palette.primary.cardLightBg,
                }}
              >
                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    )}
    
    </>
  );
};
