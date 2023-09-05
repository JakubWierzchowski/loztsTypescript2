export interface WrapperProps {
  paddingTop?: any;
  background?: any;
}

export interface SpanProps {
  color?: string;
}

export interface NavbarProps {
  pathname?: string;
}

export interface OpenIndexes {
  [key: number]: number | null;
}

export interface HandleOpenSubmenuArgs {
  levelIndex: number;
  itemIndex: number;
}
