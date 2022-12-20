import { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import AboutJob from "./AboutJob";
import LoadMoreButton from "./LoadMoreButton";

const JobsList = (props: {
  darkMode: boolean;
  filteredArray: any;
  loadJobs: boolean;
  setLoadJobs: (loadJobs: boolean) => void;
}) => {
  const [pages, setPages] = useState<number>(1);

  let filteredData =
    props.filteredArray.length > 0
      ? props.filteredArray
      : data.slice(0, 12 * pages);

  return (
    <>
      {/* <MainContainer>
        {filteredData.map((item: any, index: any) => (
          <Section color={props.darkMode ? " #19202D" : "#FFFFFF"} key={index}>
            <LogoBackground backColor={item.logoBackground}>
              <img
                alt={item.company}
                src={process.env.PUBLIC_URL + item.logo}
              />
            </LogoBackground>
            <TimeSpanSection>
              <TimeSpans>{item.postedAt}</TimeSpans>
              <Dot>.</Dot>
              <TimeSpans>{item.contract}</TimeSpans>
            </TimeSpanSection>
            <PositionName color={props.darkMode ? " #FFFFFF" : "#19202d"}>
              {item.position}
            </PositionName>
            <CompanyName>{item.company}</CompanyName>
            <CountryName>{item.location}</CountryName>
          </Section>
        ))}
        {props.loadJobs ? (
          <LoadMoreButton
            pages={pages}
            setPages={setPages}
            loadJobs={props.loadJobs}
            setLoadJobs={props.setLoadJobs}
          />
        ) : null}
      </MainContainer> */}
      <AboutJob darkMode={props.darkMode} />
    </>
  );
};

export default JobsList;

const MainContainer = styled.div`
  margin: 0 24px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 49px;
`;

const Section = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 6px;
  position: relative;
  padding: 49px 36px 36px 32px;
  display: flex;
  flex-direction: column;
  width: 330px;
`;

const TimeSpans = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #6e8098;
`;

const PositionName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  margin: 16px 0;
`;

const CompanyName = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #6e8098;
  margin-bottom: 44px;
`;

const CountryName = styled.span`
  color: #5964e0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;

const LogoBackground = styled.div<{ backColor: string }>`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.backColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
`;

const TimeSpanSection = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  color: #6e8098;
`;
