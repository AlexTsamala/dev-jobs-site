import styled from "styled-components";
import locationIMG from "../assets/desktop/icon-location.svg";
import searchIMG from "../assets/desktop/icon-search-desktop.svg";
import data from "../data.json";
import { useState } from "react";

interface FilterProps {
  darkMode: boolean;
  setFilterValue: (filterValue: string) => void;
  filterValue: string;
  setFilteredArray: any;
}

const DesktopFilter = (props: FilterProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setFilterValue(event.target.value);
  };

  const searchButtonHandler = () => {
    const newArray = data.slice();
    let result: any = [];
    if (isChecked && location.length === 0 && props.filterValue.length === 0) {
      result = newArray.filter((item) => item.contract.includes("Full Time"));
    } else if (
      isChecked &&
      location.length > 0 &&
      props.filterValue.length === 0
    ) {
      result = newArray.filter(
        (item) =>
          item.contract.includes("Full Time") &&
          item.location.includes(location)
      );
    } else if (
      isChecked &&
      location.length > 0 &&
      props.filterValue.length > 0
    ) {
      result = newArray.filter(
        (item) =>
          item.position.includes(props.filterValue) &&
          item.contract.includes("Full Time") &&
          item.location.includes(location)
      );
    } else if (location.length > 0 && props.filterValue.length === 0) {
      result = newArray.filter((item) => item.location.includes(location));
    } else if (
      location.length > 0 &&
      props.filterValue.length > 0 &&
      !isChecked
    ) {
      result = newArray.filter(
        (item) =>
          item.position.includes(props.filterValue) &&
          item.location.includes(location)
      );
    } else {
      result = newArray.filter((item) =>
        item.position.includes(props.filterValue)
      );
    }
    props.setFilteredArray(result);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const LocationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <Section color={props.darkMode ? " #19202D" : "#FFFFFF"}>
      <FilterSection>
        <img alt="search" src={searchIMG} />
        <FilterInput
          onChange={filterHandler}
          value={props.filterValue}
          placeholderColor={props.darkMode ? " #FFFFFF" : "#19202D"}
          color={props.darkMode ? " #19202D" : "#FFFFFF"}
          type="text"
          placeholder="Filter by title, companies, expertise…"
        />
      </FilterSection>
      <hr></hr>
      <LocationSection>
        <img alt="location" src={locationIMG} />
        <FilterInput
          placeholderColor={props.darkMode ? " #FFFFFF" : "#19202D"}
          color={props.darkMode ? " #19202D" : "#FFFFFF"}
          type="text"
          placeholder="Filter by location…"
          value={location}
          onChange={LocationHandler}
        />
      </LocationSection>
      <hr></hr>
      <ButtonCheckBoxSection>
        <FullTimeSection color={props.darkMode ? "#FFFFFF" : " #19202D"}>
          <CheckBox
            onChange={handleChange}
            checked={isChecked}
            type="checkbox"
            name="fullTimeFilter"
          />
          <span>Full Time Only</span>
        </FullTimeSection>
        <SearchButton onClick={searchButtonHandler}>Search</SearchButton>
      </ButtonCheckBoxSection>
    </Section>
  );
};

export default DesktopFilter;

const Section = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 80px;
    background-color: ${(props) => props.color};
    border-radius: 6px;
    transform: translateY(-43px);
  }
`;

const LocationSection = styled.div`
  margin: 24px;
  display: flex;
  gap: 16px;
`;

const ButtonCheckBoxSection = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;
const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
`;

const FilterInput = styled.input<{ placeholderColor: string; color: string }>`
  border: none;
  color: ${(props) => props.placeholderColor};
  background-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  width: 300px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${(props) => props.placeholderColor};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const FullTimeSection = styled.div`
  margin: 27px 0 29px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${(props) => props.color};
  }
`;

const CheckBox = styled.input`
  height: 24px;
  width: 24px;
  border-radius: 3px;
  background-color: #19202d;
`;

const SearchButton = styled.button`
  height: 48px;
  width: 123px;
  border-radius: 5px;
  background-color: #5964e0;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-right: 16px;
`;
