export interface LeagueDetails {
  team: string;
  result: number[];
  wyniki: number[];
}

export interface LeagueMainTableComponentProps {
  data: LeagueDetails[];
  index: number;
  title: string;
}
