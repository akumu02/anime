/* eslint-disable jsx-a11y/img-redundant-alt */
//import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
// import { useProduct } from "../hooks/useProduct";
import {
  Option,
  //   onChangeArgs,
  OptionCardHandlers,
  OptionContextProps,
} from "../interfaces/interfaces";
import {
  CardWrapper,
  CardContainer,
  //   CardImage,
  //   CardTextWrapper,
  //   CardTextTitle,
  //   CardTextBody,
  //   CardStatWrapper,
  //   CardStats,
  //   LinkText,
} from "./CardStyles";

export const OptionContext = createContext({} as OptionContextProps);
const { Provider } = OptionContext;

export interface Props {
  option: Option;
  // children?: ReactElement | ReactElement[];
  children: (args: OptionCardHandlers) => JSX.Element;
  //   onChange?: (args: onChangeArgs) => void;
}

export const OptionCard = ({
  children,
  option,
}: //   onChange,
Props) => {
  //   const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
  //     onChange,
  //     product,
  //     value,
  //     initialValues,
  //   });
  //   const maxCount = initialValues?.maxCount;

  return (
    <Provider
      value={{
        option,
        // increaseBy
      }}
    >
      <CardContainer>
        <CardWrapper>
          {children({
            option,
            //   increaseBy,
          })}
          {/* <CardImage background={option.img} />
        <CardTextWrapper>
          <CardTextTitle>{option.title}</CardTextTitle>
          <CardTextBody>{option.desc}</CardTextBody>
        </CardTextWrapper>
        <CardStats>
          <LinkText href="#">Go!</LinkText>
        </CardStats> */}
        </CardWrapper>
      </CardContainer>

      {/* <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div> */}
    </Provider>
  );
};
