import React from "react";
import GoogleCalendar from "../calendars/google/GoogleCalendar";
import styled from "styled-components";
import HeaderCalendar from "../calendars/google/HeaderCalendar";
import MonitorCalendar from "../calendars/google/MonitorCalendar";
import Sobitie from "../calendars/sobities/Sobitie";
import s from "./GooglePage.module.css";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
`;

const GooglePage = ({ startDay, today, nextMath, todayMath, previeMath }) => {
  return (
    <>
      <ShadowWrapper>
        <HeaderCalendar />
        <MonitorCalendar
          today={today}
          previeMath={previeMath}
          todayMath={todayMath}
          nextMath={nextMath}
        />
        <GoogleCalendar startDay={startDay} today={today} />
      </ShadowWrapper>
      <div className={s.sob}>
        <Sobitie />
      </div>
    </>
  );
};

export default GooglePage;
