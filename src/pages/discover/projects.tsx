import { Search } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  ProjectsDetails,
  TagHashtags,
  TagList,
  Tags,
} from "../../../components/Home/Data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { AppBtn, TagButton } from "../../../common/Home/ButtonsPage";
import { ArrowForwardIos } from "@mui/icons-material";
import { TagFilter, TagsContainer } from "../../../common/Home/ContainerPage";
import { TagHashText } from "../../../common/Home/TyposPage";
import { FilteredTags } from "../../../common/Home/GridPages";

const projects = ({ theme, mode }: any) => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Box
            component="form"
            sx={{
              marginTop: "4rem",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search Projects or Type a Prompt"
              className="customTextField"
              InputProps={{
                classes: {
                  notchedOutline: "customTextField",
                },
                style: {
                  color: mode === "light" ? "#262626" : "white", // Change color of typed text inside TextField
                  padding: "15px 20px",
                  border:
                    mode === "light"
                      ? "2px solid rgba(38, 38, 38, 0.40)"
                      : "2px solid rgba(255, 255, 255, 0.40)",
                  borderRadius: "3.125rem",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        fontSize: "4rem",
                        color:
                          mode === "light"
                            ? "rgba(0, 0, 0, 0.40)"
                            : "rgba(255, 255, 255, 0.40)",
                      }}
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <TagsContainer>
            <TagFilter
              sx={{
                color: mode === "light" ? "rgba(38, 38, 38, 0.60)" : "#fff",
                border:
                  mode === "light"
                    ? "1px solid rgba(38, 38, 38, 0.40)"
                    : "1px solid rgba(255, 255, 255, 0.70)",
              }}
            >
              Filters&nbsp;
              <FilterAltIcon />
            </TagFilter>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              wrap="wrap"
              height="auto"
            >
              {Tags.map((tag, index) => {
                return (
                  <FilteredTags
                    sx={{
                      border:
                        mode === "light"
                          ? "0.2px solid #17022D"
                          : "1px solid rgba(255, 255, 255, 0.60)",
                      color: mode === "light" ? "#17022d" : "#fff",
                    }}
                    key={index}
                  >
                    {tag.name}
                  </FilteredTags>
                );
              })}
            </Grid>
          </TagsContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              my: 10,
              color: mode === "light" ? "#262626" : "rgba(255, 255, 255, 0.60)",
              fontFamily: "Roboto Mono",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            SEE ALL PROJECTS &nbsp; <ExpandMoreIcon />{" "}
          </Box>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            wrap="wrap"
            height="auto"
          >
            {ProjectsDetails.map((item, index) => {
              return (
                <Grid
                  key={index}
                  sx={{
                    width: "500px",
                    pb: 4,
                    mx: 3,
                    mb: 5,
                    borderRadius: "10px",
                    border:
                      mode === "light" ? "1px solid #FFF" : "1px solid #12201B",
                    background: mode === "light" ? "#fff" : "#12201B",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  xs={12}
                  md={3}
                >
                  <Box sx={{ pb: 3 }}>
                    <Image
                      src={item.img}
                      height={350}
                      width={500}
                      alt="dianiapp"
                      quality={100}
                      layout="responsive"
                    />
                  </Box>

                  <Box sx={{}}>
                    <Box
                      sx={{
                        display: "flex",
                        color: mode === "light" ? "#17022d" : "#fff",
                        justifyContent: "space-between",
                        px: 2,
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: 700,
                          fontFamily: "Roboto Mono",
                          fontSize: "24px",
                        }}
                      >
                        {item.name} <br />{" "}
                        <i>
                          {" "}
                          <span style={{ fontWeight: 400, fontSize: "1rem" }}>
                            {item.status}
                          </span>{" "}
                        </i>{" "}
                      </Box>
                      <Box
                        sx={{
                          color: "#29CC7A",
                          fontSize: "15px",
                          cursor: "pointer",
                          fontFamily: "Roboto Mono",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        Learn More&nbsp;
                        <ArrowForwardIos style={{ fontSize: "20px" }} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "Roboto Mono",
                        fontWeight: 300,
                        p: 2,
                        color: mode === "light" ? "#17022d" : "#fff",
                      }}
                    >
                      {item.description}
                    </Box>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      wrap="wrap"
                      height="auto"
                    >
                      {TagList.map((tag, index) => {
                        return (
                          <TagButton
                            sx={{
                              border:
                                mode === "light"
                                  ? "0.2px solid #17022D"
                                  : "0.2px solid #FFF",
                              color: mode === "light" ? "#17022D" : "#fff",
                              background: mode === "light" ? "#fff" : "#12201B",
                            }}
                          >
                            {tag.name}
                          </TagButton>
                        );
                      })}
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      wrap="wrap"
                      height="auto"
                    >
                      {TagHashtags.map((item, index) => {
                        return (
                          <TagHashText
                            sx={{
                              color: mode === "light" ? "#17022D" : "#fff",
                            }}
                          >
                            #{item.name}
                          </TagHashText>
                        );
                      })}
                    </Grid>
                    <Box
                      sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        my: 2,
                      }}
                    >
                      <AppBtn
                        sx={{
                          color: mode === "light" ? "#fff" : "#12201B",
                          "&:hover": {
                            color: mode === "light" ? "#12201B" : "#fff",
                          },
                        }}
                      >
                        Launch App &nbsp;
                        <Image
                          src="/right.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />{" "}
                      </AppBtn>
                      <AppBtn
                        sx={{
                          color: mode === "light" ? "#fff" : "#12201B",
                          "&:hover": {
                            color: mode === "light" ? "#12201B" : "#fff",
                          },
                        }}
                      >
                        Build App &nbsp;
                        <Image
                          src="/sharp.svg"
                          height={15}
                          width={15}
                          alt="icon"
                        />
                      </AppBtn>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default projects;
