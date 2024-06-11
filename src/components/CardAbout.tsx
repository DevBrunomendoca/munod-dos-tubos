import Image from "next/image";
import { FunctionComponent } from "react";

interface CardAboutProps {
  textCard: string;
  iconCard: string;
  className: string;
}

const CardAbout: FunctionComponent<CardAboutProps> = ({
  textCard,
  iconCard,
  className,
}) => {
  return (
    <div
      className={`${className}  px-3 py-4  rounded-md flex flex-col items-center gap-4 `}
      style={{ maxWidth: "190px", minHeight: "150px" }}
    >
      <Image width={40} height={40} alt="Icone card" src={iconCard} />
      <h4 className="text-xl text-center text-first-color">{textCard}</h4>
    </div>
  );
};

export default CardAbout;
