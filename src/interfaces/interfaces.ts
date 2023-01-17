export interface Option {
  id: string;
  title: string;
  img: string;
  desc: string;
}

export interface OptionContextProps {
  // increaseBy: (value: number) => void;
  option: Option;
}

export interface OptionCardHandlers {
  option: Option;

  // increaseBy: (value: number) => void
}
