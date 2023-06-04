"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SlideUp from "./SlideUp";
import { BsFillBuildingFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="hidden flex-col space-y-28 md:flex">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontWeight: 700 }}
                  align="right"
                  variant="h5"
                  color="white"
                >
                  2017-2019
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector className="h-16" />
                  <TimelineDot color="primary">
                    <BsFillBuildingFill />
                  </TimelineDot>
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight={700}
                    letterSpacing="1px"
                  >
                    Bal Bhavan Public School
                  </Typography>
                  <Typography letterSpacing="1px">
                    Graduated my high school with{" "}
                    <span className="font-extrabold">82%</span> and with many
                    sports tournament certificates.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontWeight: 700 }}
                  variant="h5"
                  color="white"
                >
                  2019-2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector className="h-16" />
                  <TimelineDot color="primary">
                    <BsFillBuildingFill />
                  </TimelineDot>
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span" fontWeight={700}>
                    IIMT Affiliated to GGSIPU
                  </Typography>
                  <Typography>
                    Graduated my college with{" "}
                    <span className="font-extrabold">8.4 CGPA</span> with the
                    knowledge of business and computer science
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontWeight: 700 }}
                  variant="h5"
                  color="white"
                >
                  2020-2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector className="h-16" />
                  <TimelineDot color="primary">
                    <BsFillBriefcaseFill />
                  </TimelineDot>
                  <TimelineConnector
                    sx={{ bgcolor: "white" }}
                    className="h-16"
                  />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span" fontWeight={700}>
                    COSP Technologies Pvt. Ltd.
                  </Typography>
                  <Typography>
                    Worked as full-time Data Manager and Fullstack Development
                    Intern learned about
                    <span className="font-bold"> Data Cleaning</span> using{" "}
                    <span className="font-bold">Ms Excel</span> and creating
                    API&apos;s using <span className="font-bold">Python</span>{" "}
                    and frontend development with{" "}
                    <span className="font-bold">React</span>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontWeight: 700 }}
                  variant="h5"
                  color="white"
                >
                  2022-Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{ bgcolor: "white" }}
                    className="h-16"
                  />
                  <TimelineDot color="primary">
                    <BsFillBriefcaseFill />
                  </TimelineDot>
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span" fontWeight={700}>
                    SNVA Ventures
                  </Typography>
                  <Typography>
                    Wroking as a fulltime MERN Stack developer with the
                    responsibilities of creating and integrating API&apos;s
                    using <span className="font-bold">Node JS</span>,
                    <span className="font-bold">Express JS</span>, develop
                    frontend using <span className="font-bold">React JS</span>,
                    <span className="font-bold">Next JS</span> and maintain
                    database using<span className="font-bold"> Mongodb</span>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </SlideUp>
      </div>
      <div className="flex flex-col space-y-28 md:hidden">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" fontWeight={600}>
                    Bal Bhavan Public School (2017-2019)
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" fontWeight={600}>
                    IIMT Affiliated to GGSIPU (2019-2022)
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" fontWeight={600}>
                    COSP Technologies Pvt. Ltd. (2020-2022)
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                  <TimelineConnector className="h-16" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" fontWeight={600}>
                    SNVA Ventures (2022-Present)
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Experience;
