import React from "react";
import styled from "styled-components";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  pudding: 16px;
  background-color: gray;
`;

const TextWrapper = styled("span")`
  font-size: 32px;
`;

//использование наследования
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonWrapper = styled("button")`
  border: unset;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  outline: unset;
`;

const TodayBtn = styled(ButtonWrapper)`
  pudding-right: 16px;
  pudding-left: 16px;
  font-weight: bold;
`;
const MonitorCalendar = ({ today, previeMath, todayMath, nextMath }) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <div>
        <ButtonWrapper onClick={previeMath}>&lt;</ButtonWrapper>
        <TodayBtn onClick={todayMath}>Today</TodayBtn>
        <ButtonWrapper onClick={nextMath}>&gt;</ButtonWrapper>
      </div>
    </DivWrapper>
  );
};

export default MonitorCalendar;
