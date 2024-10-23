// Card.js
import { Avatar, Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";


const ItemType = "CARD";

export const DndTaskCard = ({ id, index,  moveCard, label, CaseAllocation,  moveFirstBoxCard}) => {
  const theme = useTheme();
  console.log("label", label);
  console.log("staus", CaseAllocation);

  

  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index !== index) {
        moveFirstBoxCard(item.index, index);
        item.index = index; // Update the item's index
      }
    },
  });

  return (
    <>

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
    <Box className=" flex flex-col gap-y-11 px-6 py-4 relative mb-10">
                    <Box className=" flex items-center justify-between ">
                      {/* avatar  */}
                      <Box>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/YcXc5Cg/1.png" sx={{ width: 50, height: 50 }} />
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
                    {/* text and connection box  */}

                    {/* connection div or box   */}
                    <Box className=" flex items-center justify-between">
                      <Typography sx={{ color: theme.palette.text.black }}>{label}</Typography>
                      <Box className={` w-5 h-5 rounded-full  absolute -right-3 hidden lg:block `} sx={{ bgcolor: theme.palette.primary.cardLightBg }}>
                        {/* parent root  */}

                        <div className=" w-[6px] h-[6px] rounded-full bg-[#83A2DB] m-[6px]" />
                      </Box>
                    </Box>
                  </Box>

                  {/* divider  */}
                  <Divider variant="middle" />
    </Box>

    
    </>
  );
};
