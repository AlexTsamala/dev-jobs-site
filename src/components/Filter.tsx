import styled from "styled-components";
import filterIMG from "../assets/mobile/icon-filter.svg";
import filterDarkIMG from "../assets/mobile/icon-filter-white.svg";
import searchIMG from "../assets/desktop/icon-search.svg";
import data from "../data.json";

interface FilterProps {
  darkMode: boolean;
  setFilterValue: (filterValue: string) => void;
  filterValue: string;
  setFilteredArray: any;
  openFilterModal: boolean;
  setFilterModal: (openFilterModal: boolean) => void;
}

const Filter = (props: FilterProps) => {
  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setFilterValue(event.target.value);
  };

  const filterModalHandler = () => {
    props.setFilterModal(!props.openFilterModal);
  };

  const searchButtonHandler = () => {
    const newArray = data.slice();
    const result = newArray.filter((item) =>
      item.position.includes(props.filterValue)
    );
    props.setFilteredArray(result);
  };

  return (
    <Section color={props.darkMode ? " #19202D" : "#FFFFFF"}>
      <FilterInput
        onChange={filterHandler}
        value={props.filterValue}
        placeholderColor={props.darkMode ? " #FFFFFF" : "#19202D"}
        color={props.darkMode ? " #19202D" : "#FFFFFF"}
        type="text"
        placeholder="Filter by title…"
      />
      <LocationSearchSection>
        {props.darkMode ? (
          <img
            onClick={filterModalHandler}
            alt="location"
            style={{ cursor: "pointer" }}
            src={filterDarkIMG}
          />
        ) : (
          <img
            onClick={filterModalHandler}
            alt="location"
            style={{ cursor: "pointer" }}
            src={filterIMG}
          />
        )}
        <SearchButton onClick={searchButtonHandler}>
          <img alt="search" src={searchIMG} />
        </SearchButton>
      </LocationSearchSection>
    </Section>
  );
};

export default Filter;

const Section = styled.div`
  height: 80px;
  width: 327px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  transform: translateY(-40px);
  @media (min-width: 1440px) {
    display: none;
  }
`;

const LocationSearchSection = styled.div``;

const SearchButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #5964e0;
  border-radius: 5px;
  border: none;
  margin-left: 24px;
  cursor: pointer;
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
