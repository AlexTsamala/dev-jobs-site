import styled from "styled-components";

const AboutJob = (props: { darkMode: boolean }) => {
  return (
    <Container>
      <Header color={props.darkMode ? " #19202D" : "#FFFFFF"}>
        <LogoBackground backColor="hsl(36, 87%, 49%)">
          {/* <img alt="scoot" src={process.env.PUBLIC_URL + LogoIMG} /> */}
        </LogoBackground>
        <CompanyName>Scoot</CompanyName>
        <CompanySiteAddress color={props.darkMode ? " #FFFFFF" : "#19202d"}>
          scoot.com
        </CompanySiteAddress>
        <CompanySiteLinkButton>
          <a href="https://example.com/scoot" target="_blank">
            Company Site
          </a>
        </CompanySiteLinkButton>
      </Header>
      <DescribeSection>
        <TimeSpanSection>
          <TimeSpans>1w ago</TimeSpans>
          <Dot></Dot>
          <TimeSpans>Part Time</TimeSpans>
        </TimeSpanSection>
        <PositionName color={props.darkMode ? " #FFFFFF" : "#19202d"}>
          Senior Software Engineer
        </PositionName>
        <CountryName>United Kingdrom</CountryName>
        <ApplyButton>Apply Now</ApplyButton>
      </DescribeSection>
    </Container>
  );
};

export default AboutJob;

const Container = styled.div``;

const Header = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 6px;
  position: relative;
  padding-top: 49px;
  display: flex;
  flex-direction: column;
  width: 330px;
  align-items: center;
  margin: -15px 24px 0;
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
  left: 140px;
`;

const CompanyName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  color: #19202d;
  margin-bottom: 13px;
`;

const CompanySiteAddress = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #6e8098;
  margin-bottom: 27px;
`;

const CompanySiteLinkButton = styled.button`
  height: 48px;
  width: 147px;
  border-radius: 5px;
  background-color: #f4f6f8;
  margin-bottom: 32px;
  border: none;
  a {
    color: #5964e0;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-decoration: none;
  }
`;

const DescribeSection = styled.div`
  background-color: #ffffff;
  margin: 24px;
  border-radius: 6px;
  padding: 40px 24px;
  width: 327px;
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
  margin: 11px 0;
`;

const CountryName = styled.span`
  color: #5964e0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
`;

const TimeSpanSection = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #6e8098;
  border-radius: 50%;
  margin-top: 12px;
`;

const ApplyButton = styled.button`
  height: 48px;
  width: 279px;
  border-radius: 5px;
  background-color: #5964e0;
  border: none;
  margin: 54px 0 32px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
`;
