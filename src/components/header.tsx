import { createClient } from "@/prismicio";
import Navbar from "./navbar";
const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="fixed left-0 right-0 top-8 md:top-10 mx-auto flex z-50 w-full items-center justify-center">
      <Navbar settings={settings} />
    </header>
  );
};

export default Header;
