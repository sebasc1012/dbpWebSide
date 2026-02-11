import { navbarItems } from "@/constants/navbarItems";
import { OptionNavbar } from "./OptionNavbar";

export function Navbar() {
  return (
    <>
      <header className="w-full px-4 py-4 bg-gray-800 text-white flex justify-between items-center z-150">
        {navbarItems.map(({ optionName, optionsMenu, id }) => (
          <OptionNavbar
            mainOption={optionName}
            optionsMenu={optionsMenu}
            key={id}
          />
        ))}
      </header>
    </>
  );
}
