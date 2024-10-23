import { Link } from "react-router-dom";
import errorPic from "../assets/images/error.jpg"
import { Box, Typography, useTheme } from "@mui/material";


const NotFound = () => {
    const theme = useTheme()
    return (
        <Box className="h-screen w-full flex justify-center items-center flex-col" sx={{backgroundColor: theme.palette.mode === "dark" && theme.palette.primary.black}}>
            <Box className="w-80 h-64">
                <img src={errorPic} className="w-full h-full object-cover" alt="404 error"  />
            </Box>
            <Box className="space-y-3 text-center mt-2">
                <Typography className="text-xl">Oops! Page Not Found</Typography>
                <Typography><Link to={"/"}><button className="py-3 px-4 bg-[#E297DC] border-none rounded-md text-white hover:cursor-pointer">Go back home</button></Link></Typography>
            </Box>
        </Box>
    );
};


export default NotFound;
