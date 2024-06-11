import { FunctionComponent } from "react";

import Image from "next/image";
import Paragraph from "./Paragraph";

interface CardContactProps {
  iconCard: string;
  textCard: string;
  textButton: string;
}

const CardContact: FunctionComponent<CardContactProps> = ({
  iconCard,
  textButton,
  textCard,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        width={40}
        height={43}
        src={iconCard}
        alt={`Icone ${textButton}`}
      />
      <Paragraph textParagraph={textCard} textColor="text-second-color" />
      <button className="bg-second-color text-first-color px-12 py-3 rounded-md">
        {textButton}
      </button>
    </div>
  );
};

export default CardContact;
