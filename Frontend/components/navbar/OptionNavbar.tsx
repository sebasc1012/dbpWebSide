import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OptionNavbarProps {
  mainOption: string;
  optionsMenu: string[];
}

export function OptionNavbar({ mainOption, optionsMenu }: OptionNavbarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{mainOption}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        {optionsMenu.map((option) => (
          <DropdownMenuGroup>
            <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
