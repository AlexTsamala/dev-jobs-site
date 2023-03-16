import styled from "styled-components";
import data from "../data.json";

const AboutJob = (props: { darkMode: boolean }) => {
  return (
    <Container>
      <Header color={props.darkMode ? " #19202D" : "#FFFFFF"}>
        <LogoBackground backColor="hsl(36, 87%, 49%)">
          <img alt="scoot" src={process.env.PUBLIC_URL + data[0].logo} />
        </LogoBackground>
        <CompanyName color={props.darkMode ? "#FFFFFF" : " #19202D"}>Scoot</CompanyName>
        <CompanySiteAddress color={props.darkMode ? " #FFFFFF" : "#19202d"}>
          scoot.com
        </CompanySiteAddress>
        <CompanySiteLinkButton color={props.darkMode ? " #000013" : " #BEBEBE"}>
          <a href="https://example.com/scoot" rel="noreferrer" target="_blank">
            Company Site
          </a>
        </CompanySiteLinkButton>
      </Header>
      <DescribeSection color={props.darkMode ? "#19202D" : "#FFFFFF"}>
        <TimeSpanSection>
          <TimeSpans>1w ago</TimeSpans>
          <Dot></Dot>
          <TimeSpans>Part Time</TimeSpans>
        </TimeSpanSection>
        <PositionName color={props.darkMode ? " #FFFFFF" : "#19202d"}>
          Senior Software Engineer
        </PositionName>
        <CountryName>United Kingdrom</CountryName>
        <ApplyButton>
          <a href="https://example.com/scoot/apply" rel="noreferrer" target="_blank">
            Apply Now
          </a>
        </ApplyButton>
        <CompanyDescription>{data[0].description}</CompanyDescription>
        <Title color={props.darkMode ? "#FFFFFF" : " #19202D"}>Requirements</Title>
        <CompanyDescription>{data[0].requirements.content}</CompanyDescription>
        <UnorderedListSection>
          <UnorderedList>{data[0].requirements.items[0]}</UnorderedList>
          <UnorderedList>{data[0].requirements.items[1]}</UnorderedList>
          <UnorderedList>{data[0].requirements.items[2]}</UnorderedList>
          <UnorderedList>{data[0].requirements.items[3]}</UnorderedList>
        </UnorderedListSection>
        <Title color={props.darkMode ? "#FFFFFF" : " #19202D"}>What You Will Do</Title>
        <CompanyDescription>{data[0].role.content}</CompanyDescription>
        <OrderedListSection>
          <OrderedList>{data[0].role.items[0]}</OrderedList>
          <OrderedList>{data[0].role.items[1]}</OrderedList>
          <OrderedList>{data[0].role.items[2]}</OrderedList>
          <OrderedList>{data[0].role.items[3]}</OrderedList>
        </OrderedListSection>
        <ApplyButton>
          <a href="https://example.com/scoot/apply" rel="noreferrer" target="_blank">
            Apply Now
          </a>
        </ApplyButton>
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
  color: ${(props) => props.color};
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
  background-color: ${(props) => props.color};
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
  background-color: ${(props) => props.color};
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
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  color: #6e8098;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  margin-bottom: 28px;
`;

const UnorderedListSection = styled.ul`
  margin-bottom: 40px;
`;
const UnorderedList = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  color: #6e8098;
  margin-bottom: 8px;
`;

const OrderedListSection = styled.ol``;

const OrderedList = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  color: #6e8098;
  margin-bottom: 8px;
`;
