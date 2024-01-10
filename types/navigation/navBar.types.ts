export interface WrapperProps {
  paddingTop?: any;
  background?: any;
}

export interface SpanProps {
  color?: string;
}

export interface OpenIndexes {
  [key: number]: number | null;
}

export interface HandleOpenSubmenuArgs {
  levelIndex: number;
  itemIndex: number;
}

export interface CenterLogoProps {
  pathname: string | undefined;
  scrollValue: number;
  color: string;
}

export interface SubmenuItems {
  link: string;
  liLi: string;
}

export interface Menu {
  link: string;
  li: string;
  dropDown?: SubmenuItems[];
}

export interface DropdownMenuProps {
  mainMenu: Menu;
  isOpen: boolean;
  handleOpenSubmenu: () => void;
  color: string;
  onItemClick: () => void;
  // setMenuValue: React.Dispatch<React.SetStateAction<boolean>>;
  // menuValue: boolean;
  // item: any;
}
export interface LoginLogoutProps {
  loginLogout: () => void;
  menuValue: () => void;
  color: string;
  text: string;
}
