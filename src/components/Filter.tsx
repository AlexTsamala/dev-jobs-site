import styled from "styled-components";
import filterIMG from "../assets/mobile/icon-filter.svg";
import searchIMG from "../assets/desktop/icon-search.svg";

const Filter = () => {
  return (
    <Section>
      <FilterInput type="text" placeholder="Filter by title…" />
      <LocationSearchSection>
        <img alt="location" src={filterIMG} />
        <SearchButton>
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
  background-color: #ffffff;
`;

const LocationSearchSection = styled.div``;

const SearchButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #5964e0;
  border-radius: 5px;
`;

const FilterInput = styled.input`
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    color: #19202d;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
