interface NavbarItem {
  optionName: string;
  id:number;
  optionsMenu: string[];
}

export const navbarItems: NavbarItem[] = [
  {
    optionName: "Products",
    id:1,
    optionsMenu: ["Profile", "Billing", "Settings", "Keyboard Shortcuts"],
  },
  {
    optionName: "Customization",
     id:2,
    optionsMenu: ["Social Media", "Support", "Contact Us"],
  },
  {
    optionName: "User",
     id:3,
    optionsMenu: ["Profile", "Settings", "Sign out"],
  },
];
