import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const columns = [
  { id: "rating", label: "", minWidth: 120 },
  { id: "subject", label: "Subject", minWidth: 120, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  {
    id: "start_date",
    label: "Start Date",
    minWidth: 120,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "end_date",
    label: "End Date",
    minWidth: 120,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "assigned_user",
    label: "Assigned User",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  
  subject,
  status,
  start_date,
  end_date,
  assigned_user,
  uid
) {
  //   const density = population / size;
  return {  subject, status, start_date, end_date, assigned_user, uid };
}

const rows = [
  createData(
    
    "Design Sprint",
    "Executed",
    "01-Oct-2024",
    "19-Oct-2024",
    "Lutfor Rahman",
    "1"
  ),
  createData(
   
    "Mention Bugs",
    "Scheduled",
    "01-Oct-2024",
    "19-Oct-2024",
    "Zihad Hasan",
    "2"
  ),
  createData(
    
    "Ui Design",
    "Completed",
    "01-Oct-2024",
    "19-Oct-2024",
    "Md Didar",
    "3"
  ),
  createData(
    
    "Learn AI",
    "Scheduled",
    "01-Oct-2024",
    "19-Oct-2024",
    "Md Fakhrul",
    "4"
  ),
];

const SuggestedKnowledgeTable = () => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [activeRow, setActiveRow] = useState("2");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Updates the active row state
  const handleActiveRow = (row) => {
    setActiveRow(row.uid);
  };

  console.log(activeRow);

  return (
    <Box>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          bgcolor: theme.palette.primary.cardLightBg,
          boxShadow: "none",
        }}
      >
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead
              sx={{
                "& .MuiTableCell-root": {
                  bgcolor: theme.palette.primary.cardLightBg,
                  // borderBottom: "1px solid #E0E0E0",
                  borderBottom: `2px solid ${theme.palette.primary.border2}`

                },
              }}
            >
              <TableRow
                sx={{
                  borderBottom: "2px solid red", // Set the border style and color
                  "& .css-15uwx9v-MuiTableCell-root": {borderBottom: "none",}, 
                  "& .css-1bofi2j-MuiTableCell-root": {borderBottom: "none"},
                }}
              >
                {columns.map((column) => (
                  <TableCell
                  sx={{ borderBottom: "none","& .css-15uwx9v-MuiTableCell-root": {borderBottom: "none", }, "& .css-1bofi2j-MuiTableCell-root": {borderBottom: "none"}}}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{"& .css-17uzi0w-MuiTableCell-root": {borderBottom: "none"}}}>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={() => handleActiveRow(row)}
                    >
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{
                              fontWeight:
                                activeRow === row.uid ? "bold" : "normal",
                              borderBottom: "none",
                               
                            }}
                          >
                            {index === 0 ? (
                              activeRow === row.uid? (
                                <StarIcon />
                              ) : (
                                <StarBorderIcon />
                              ) 
                            ) : index === 2 ? (
                              <Typography
                                sx={{
                                  bgcolor:
                                    value === "Executed"
                                      ? "#83A2DB"
                                      : value === "Scheduled"
                                      ? "#CE6969"
                                      : value === "Completed"
                                      ? "green"
                                      : "",
                                  padding: "5px 14px",
                                  width: "max-content",
                                  borderRadius: "24px",
                                  color: "white",
                                  fontSize: "14px",
                                }}
                              >
                                {value}
                              </Typography>
                            ) : // Render the value normally for other columns
                            column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                            
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default SuggestedKnowledgeTable;
