import { FunctionComponent } from "react";

interface ThirdTitleProps {
  textThirdTilte: string;
}

const ThirdTitle: FunctionComponent<ThirdTitleProps> = ({ textThirdTilte }) => {
  return <h3 className="text-xl text-second-color">{textThirdTilte}</h3>;
};

export default ThirdTitle;
