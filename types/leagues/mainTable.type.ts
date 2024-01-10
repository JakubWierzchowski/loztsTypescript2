export interface MainTableLeagueDetails {
  lossMatches: number;
  winMatches: number;
  pkt: number;
  gamesNumber: number;
  team: string;
  result: number[];
  wyniki: number[];
}

export interface LeagueMainTableComponentProps {
  data: MainTableLeagueDetails[];
  index: number;
  title: string;
}
