import styled from "styled-components";

interface AppProps {
  pages: number;
  setPages: (pages: number) => void;
  loadJobs: boolean;
  setLoadJobs: (loadJobs: boolean) => void;
}

const LoadMoreButton = (props: AppProps) => {
  const loadButtonHandler = () => {
    props.setPages(props.pages + 1);
    props.setLoadJobs(!props.loadJobs);
  };
  return (
    <MainSection onClick={loadButtonHandler}>
      <h1>Load More</h1>
    </MainSection>
  );
};

export default LoadMoreButton;

const MainSection = styled.div`
  height: 48px;
  width: 141px;
  background-color: #5964e0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    color: #ffffff;
  }
`;
