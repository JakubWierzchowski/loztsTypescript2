export interface LeagueDetails {
  team: string;
  result: number[];
  wyniki: number[];
  id?: number;
}

export interface LeagueSeason {
  sezon: string;
  details: LeagueGroup[];
}

export interface MonthDetails {
  month: string;
  details: LeagueDetails[];
}
export interface LeagueGroup {
  title: string;
  leagueDetails: MonthDetails[];
}

export interface LeagueArchive {
  ligaArchiwum: LeagueSeason[];
}
