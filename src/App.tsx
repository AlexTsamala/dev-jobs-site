import styled from "styled-components";
import Header from "./components/Head";
import { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter";
import JobsList from "./components/JobsList";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter />
      <JobsList />
    </Container>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Kumbh Sans', sans-serif;;
      }
      body{
        background-color: #F4F6F8;
      }
    
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
