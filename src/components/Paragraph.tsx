import { FunctionComponent } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface ParagraphProps {
  textParagraph: string;
  textColor?: string;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({
  textParagraph,
  textColor,
}) => {
  return (
    <p className={`text-sm ${textColor} ${poppins.className}`}>
      {textParagraph}
    </p>
  );
};

export default Paragraph;
