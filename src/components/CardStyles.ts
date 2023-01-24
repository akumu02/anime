import styled from "styled-components";

export const CardContainer = styled.div`
  width: 65vw;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  padding-top: 3rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 360px) {
    width: calc(100% - 10px);
    height: calc(100% - 30px);
  }
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

// export const ImageContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding-bottom: 2rem;
//   // background-repeat: repeat-x;
//   background-position-x: bottom;
// `;

export const LogoImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  background-repeat: repeat-x;
  height: 10vmin;
  // width: 10vmin;
  overflow: hidden;
  background-size: contain;
  background-position: center;
  background-position-x: center;
  background-position-y: bottom;
  opacity: 0.5;
  will-change: filter;

  @media screen and (min-width: 360px) and (max-width: 900px) {
    height: 20vmin;
  }

  @media screen and (min-width: 1350px) and (max-width: 1900px) {
    height: 15vmin;
  }
`;

export const TitlePage = styled.h1`
  color: gray;
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px pink, 0 3px #777;

  @media screen and (max-width: 390px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const TitlePageContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgba(189, 195, 199, 0.25);
  border-radius: 18px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 150px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 360px) {
    width: calc(100% - 50px);
  }
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 15px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const CardTextWrapper = styled.div`
  overflow: scroll;
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  box-sizing: border-box;
  min-width: 0px;
  margin: 0px;
  font-size: 26px;
  line-height: 32px;
  background: linear-gradient(
    20.78deg,
    rgb(236, 81, 87) 15.22%,
    gray 32.09%,
    rgb(236, 81, 87) 67.94%,
    gray 85.34%,
    rgb(236, 81, 87) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CharacterCardTextTitle = styled.p`
  margin-top: 0px;
  box-sizing: border-box;
  min-width: 0px;
  font-size: 16px;
  line-height: 22px;
  margin: 0px;
  background: linear-gradient(
    20.78deg,
    rgb(236, 81, 87) 15.22%,
    gray 32.09%,
    rgb(236, 81, 87) 67.94%,
    gray 85.34%,
    rgb(236, 81, 87) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  background: linear-gradient(20.78deg, rgb(189, 195, 199) 32.09%, pink 99.57%);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ButtonText = styled.button`
  background-color: rgb(245, 129, 194);
  border-color: rgb(255, 255, 255);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 15px;
`;
