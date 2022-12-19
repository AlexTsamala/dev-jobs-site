import { useState } from "react";
import styled from "styled-components";
import companyLogo from "../assets/logos/scoot.svg";
import data from "../data.json";
import LoadMoreButton from "./LoadMoreButton";

const JobsList = () => {
  const [loadJobs, setLoadJobs] = useState<boolean>(true);
  const [pages, setPages] = useState<number>(1);
  const loadMore = () => {
    return data.slice(0, 12 * pages);
  };

  return (
    <MainContainer>
      {loadMore().map((item, index) => (
        <Section key={index}>
          <LogoBackground backColor={item.logoBackground}>
            <img alt={item.company} src={process.env.PUBLIC_URL + item.logo} />
          </LogoBackground>
          <div>
            <TimeSpans>{item.postedAt}</TimeSpans>
            <TimeSpans>.</TimeSpans>
            <TimeSpans>{item.contract}</TimeSpans>
          </div>
          <PositionName>{item.position}</PositionName>
          <CompanyName>{item.company}</CompanyName>
          <CountryName>{item.location}</CountryName>
        </Section>
      ))}
      {loadJobs ? (
        <LoadMoreButton
          pages={pages}
          setPages={setPages}
          loadJobs={loadJobs}
          setLoadJobs={setLoadJobs}
        />
      ) : null}
    </MainContainer>
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
  background-color: #ffffff;
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
  color: #19202d;
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
