import styled from "styled-components";
import backgroundIMG from "../assets/mobile/bg-pattern-header.svg";
import sunIMG from "../assets/desktop/icon-sun.svg";
import moonIMG from "../assets/desktop/icon-moon.svg";

interface propsType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header = (props: propsType) => {
  const handleDarkMode = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <Container>
      <h1>devJobs</h1>
      <div>
        <img alt="sun" src={sunIMG} />
        <label className="switch style-1">
          <input type="checkbox" />
          <div
            onClick={handleDarkMode}
            className="toggler-slider"
            id="switcher"
          >
            <div className="toggler-knob"></div>
          </div>
        </label>
        <img alt="moon" src={moonIMG} />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-image: url(${backgroundIMG});
  padding: 32px 24px 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h1 {
    color: #ffffff;
    @media (min-width: 1440px) {
      margin-left: 9%;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (min-width: 1440px) {
      margin-right: 9%;
    }
  }
  @media (min-width: 1440px) {
    border-radius: 0px 0px 0px 100px;
  }
`;
