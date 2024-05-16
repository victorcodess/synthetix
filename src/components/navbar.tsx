import Image from "next/image";
import logo from "@/app/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="w-10 h-10 bg-[#8f37ff] rounded-full flex items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={300}
          className="w-5 h-5"
        />
      </div>
    </div>
  );
};

export default Navbar;
