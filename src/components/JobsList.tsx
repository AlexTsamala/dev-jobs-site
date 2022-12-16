import styled from "styled-components";
import companyLogo from "../assets/logos/scoot.svg";

const JobsList = () => {
  return (
    <Container>
      <img alt="logo" src={companyLogo} />
      <div>
        <TimeSpans>5h ago</TimeSpans>
        <TimeSpans>.</TimeSpans>
        <TimeSpans>Full Time</TimeSpans>
      </div>
      <PositionName>Senior Software Engineer</PositionName>
      <CompanyName>Scoot</CompanyName>
      <CountryName>United Kingdom</CountryName>
    </Container>
  );
};

export default JobsList;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
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
`;

const CompanyName = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #6e8098;
`;

const CountryName = styled.span`
  color: #5964e0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;
