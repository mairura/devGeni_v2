import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddIcon from "@mui/icons-material/Add";
import { BuildButton } from "../../Buttons";
import { CardTitle, TableCellsStyles } from "../../Typos";
import LinearWithValueLabel from "../../../utils/linear";

export default function ProjectSummary() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={7}
      component={Paper}
      sx={{
        borderRadius: "10px",
        py: 1,
        height: "40vh",
        mr: 3,
        "@media(max-width:768px)": { py: 0 },
      }}
    >
      <CssBaseline />
      <CardTitle>Project Summary</CardTitle>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "1.7rem",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="heads"
                TabIndicatorProps={{
                  style: {
                    background: "#031926",
                    marginLeft: "10px",
                    width: "40%",
                  },
                }}
              >
                {["Ongoing", "Finished"].map((label, index) => (
                  <Tab
                    key={label}
                    label={label}
                    value={`${index + 1}`}
                    sx={{
                      textTransform: "none",
                      color: "#6F6F6F",
                      fontSize: "0.75rem",
                      fontFamily: "Manrope",
                      "&.Mui-selected": {
                        color: "#031926",
                      },
                    }}
                  />
                ))}
              </TabList>
              <BuildButton variant="outlined" startIcon={<AddIcon />}>
                Build
              </BuildButton>
            </Box>
          </Box>
          {["Ongoing", "Finished"].map((_, index) => (
            <TabPanel key={index} value={`${index + 1}`}>
              <TableContainer style={{ maxHeight: "250px" }}>
                <div
                  style={{
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "hidden",
                  }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        {[
                          "Name",
                          "Category",
                          "Start Date",
                          "Completion Date",
                          "Project Progress",
                        ].map((header) => (
                          <TableCell
                            key={header}
                            sx={{
                              color: "#000",
                              fontSize: "0.75rem",
                              fontFamily: "Manrope",
                              fontWeight: 600,
                            }}
                          >
                            {header}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[...Array(10)].map((_, index) => (
                        <TableRow key={index}>
                          <TableCellsStyles>Minitrader</TableCellsStyles>
                          <TableCellsStyles>Exchange</TableCellsStyles>
                          <TableCellsStyles>Jan 1, 2023</TableCellsStyles>
                          <TableCellsStyles>Mar 3, 2023</TableCellsStyles>
                          <TableCellsStyles>
                            <LinearWithValueLabel />
                          </TableCellsStyles>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TableContainer>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Grid>
  );
}
