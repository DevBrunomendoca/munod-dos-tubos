import { FunctionComponent } from "react";

interface SecondTitleProps {
  textSecondTitle: string;
  className: string;
}

const SecondTitle: FunctionComponent<SecondTitleProps> = ({
  textSecondTitle,
  className,
}) => {
  return (
    <h2 className={`${className} text-third-color text-3xl`}>
      {textSecondTitle}
    </h2>
  );
};

export default SecondTitle;
