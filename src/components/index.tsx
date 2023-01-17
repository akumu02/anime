// import { OptionCardHOKProps } from "../interfaces/interfaces";
// // import { ProductButtons } from "./ProductButtons";

//import { OptionCard as OptionCardHOC } from "./OptionCard";
// import { OptionImage } from "./OptionImage";
// import { OptionTitle } from "./OptionTitle";

// export { OptionTitle } from "./OptionTitle";
// export { OptionImage } from "./OptionImage";
// //export { ProductButtons } from "./ProductButtons";

// export const OptionCard: OptionCardHOKProps = Object.assign(OptionCardHOC, {
//   Title: OptionTitle,
//   Image: OptionImage,
//   //   Buttons: ProductButtons,
// });

// export default OptionCard;
import { Option } from "../interfaces/interfaces";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  //CardStatWrapper,
  CardStats,
  ButtonText,
} from "./CardStyles";
import Tilt from "react-parallax-tilt";
// import characterApi from "../api/searchAnime";

// console.log(characterApi.get<any></any>());

export const Card = ({ title, id, img, desc }: Option) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={img} />
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>{desc}</CardTextBody>
        </CardTextWrapper>
        <CardStats>{/* <LinkText href="#">Go!</LinkText> */}</CardStats>
      </CardWrapper>
    </Tilt>
  );
};
