import styled from "styled-components";
import Header from "./components/Head";
import { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter />
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
    
`;

const Container = styled.div``;
