import Link from "next/link";
import { FunctionComponent } from "react";

interface ButtonProps {
  textButton: string;
  href: string;
  className?: string;
}

const ButtonNav: FunctionComponent<ButtonProps> = ({
  textButton,
  href,
  className,
}) => {
  return (
    <Link href={href}>
      <button
        className={`text-first-color bg-second-color rounded-md px-12 py-3 hover:bg-fourth-color duration-500 ${className} `}
      >
        {textButton}
      </button>
    </Link>
  );
};

export default ButtonNav;
