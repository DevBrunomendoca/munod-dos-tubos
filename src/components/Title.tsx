import { FunctionComponent } from "react";

interface TitleProps {
  textTitle: string;
}

const Title: FunctionComponent<TitleProps> = ({ textTitle }) => {
  return <h1 className="text-first-color text-4xl max-w-3xl">{textTitle}</h1>;
};

export default Title;
