// About.js

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "../Styling/about.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkIcon from "@mui/icons-material/Work";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const About = () => {
  const aboutRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Hi there! I'm Kalyan Keerthipati, a passionate and dedicated Web Developer based in Denton, Texas. With a background in Business Intelligence and Web Development, I thrive on turning complex challenges into creative solutions. My journey in the world of technology has equipped me with valuable skills in web dev and BI, and I'm always eager to learn and explore new technologies. Beyond my professional life, I'm an avid Table Tennis player. Whether it's coding late into the night or exploring the outdoors, I find joy in every moment. I believe in the power of continuous improvement and the impact of a positive mindset. Let's connect, collaborate, and create something extraordinary together!",
      ],
      typeSpeed: 20, // Adjust typing speed as needed
      showCursor: true,
      onDestroy: () => setIsMounted(false),
    };

    // Initialize Typed.js when the component is mounted or updated
    if (aboutRef.current) {
      const typed = new Typed(".about-text", options);
      setIsMounted(true);

      // Cleanup the Typed instance when the component unmounts
      return () => typed.destroy();
    }
  }, [isMounted]);

  return (
    <>
      {" "}
      <div id="about" className="about" ref={aboutRef}>
        <h1>About Me</h1>
        <div className="about-text"></div>
      </div>
      <Timeline position="alternate" className="timeline">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "gold" }}
            align="right"
            variant="body2"
            // color="text.secondary"
          >
            {" "}
            July 2016 - May 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 2 }}>
            <Typography variant="h7" component="span">
              Bachelors
            </Typography>

            <Typography variant="body2">SVCET, Chittor, India</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "gold" }}
            variant="body2"
            // color="text.secondary"
          >
            March 2021 - Feb 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "30px", px: 2 }}>
            <Typography variant="h7" component="span">
              PeopleSoft Consultant
            </Typography>
            <Typography variant="body2">
              Wipro Technologies, Pune, India
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "gold" }}
            variant="body2"
            // color="text.secondary"
          >
            March 2022 - July 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 2 }}>
            <Typography variant="h7" component="span">
              BI Developer
            </Typography>
            <Typography variant="body2">
              Eastman Chemicals, Hyderabad, India
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "gold" }}
            variant="body2"
            // color="text.secondary"
          >
            August 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 2 }}>
            <Typography variant="h7" component="span">
              Masters(Computer Science)
            </Typography>
            <Typography variant="body2">University of North Texas</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default About;
