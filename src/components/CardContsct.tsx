import { FunctionComponent } from "react";

import Image from "next/image";
import Paragraph from "./Paragraph";

interface CardContactProps {
  iconCard: string;
  textCard: string;
  textButton: string;
  hrefCard: string;
}

const CardContact: FunctionComponent<CardContactProps> = ({
  iconCard,
  textButton,
  textCard,
  hrefCard,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full text-center">
      <Image
        width={40}
        height={43}
        src={iconCard}
        alt={`Icone ${textButton}`}
      />
      <Paragraph textParagraph={textCard} textColor="text-second-color" />
      <a target="_blank" href={hrefCard}>
        <button className="bg-second-color text-first-color px-12 py-3 rounded-md hover:bg-fourth-color duration-500">
          {textButton}
        </button>
      </a>
    </div>
  );
};

export default CardContact;
