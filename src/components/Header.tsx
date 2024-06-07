import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="text-3xl">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={126} height={52} />
        </Link>
      </header>
    </>
  );
};

export default Header;
