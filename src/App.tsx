import styled from "styled-components";
import Header from "./components/Head";
import { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter";
import JobsList from "./components/JobsList";
import { useState } from "react";
import FilterModal from "./components/FIlterModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [openFilterModal, setFilterModal] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loadJobs, setLoadJobs] = useState<boolean>(true);

  return (
    <Container>
      <GlobalStyles color={darkMode ? "#121721" : "#F4F6F8"} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Filter
        openFilterModal={openFilterModal}
        setFilterModal={setFilterModal}
        darkMode={darkMode}
        setFilterValue={setFilterValue}
        filterValue={filterValue}
        setFilteredArray={setFilteredArray}
      /> */}
      <JobsList
        filteredArray={filteredArray}
        darkMode={darkMode}
        loadJobs={loadJobs}
        setLoadJobs={setLoadJobs}
      />
      {openFilterModal ? (
        <FilterModal
          setLoadJobs={setLoadJobs}
          darkMode={darkMode}
          setFilterModal={setFilterModal}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setFilteredArray={setFilteredArray}
        />
      ) : null}
    </Container>
  );
}

export default App;

const GlobalStyles = createGlobalStyle<{ color: string }>`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Kumbh Sans', sans-serif;
      }
      body{
        background-color: ${(props) => props.color}
      }
    
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
