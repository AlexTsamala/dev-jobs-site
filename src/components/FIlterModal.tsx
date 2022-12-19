import styled from "styled-components";
import locationIMG from "../assets/desktop/icon-location.svg";
import { useState } from "react";

const FilterModal = (props: { darkMode: boolean }) => {
  return (
    <ModalContainer>
      <MainSection>
        <LocationSection>
          <img alt="location" src={locationIMG} />
          <FilterInput
            placeholderColor={props.darkMode ? " #FFFFFF" : "#19202D"}
            color={props.darkMode ? " #19202D" : "#FFFFFF"}
            type="text"
            placeholder="Filter by location…"
          />
        </LocationSection>
        <hr />
        <FullTimeSection>
          <CheckBox type="checkbox" name="fullTimeFilter" />
          <span>Full Time Only</span>
        </FullTimeSection>
        <SearchButton>Search</SearchButton>
      </MainSection>
    </ModalContainer>
  );
};

export default FilterModal;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  height: 225px;
  width: 327px;
  border-radius: 6px;
  background-color: #ffffff;
  position: absolute;
`;

const FilterInput = styled.input<{ placeholderColor: string; color: string }>`
  border: none;
  color: ${(props) => props.placeholderColor};
  background-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
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

const LocationSection = styled.div`
  margin: 24px;
  display: flex;
  gap: 16px;
`;

const FullTimeSection = styled.div`
  margin: 27px 0 29px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    color: #19202d;
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
  width: 279px;
  border-radius: 5px;
  background-color: #5964e0;
  color: #ffffff;
  border: none;
  margin: 0 24px 24px;
`;
