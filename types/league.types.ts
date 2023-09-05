export interface TeamData {
  guest: string;
  guestScore: number;
  host: string;
  hostScore: number;
}

export interface LeagueDetail {
  team: string;
  result: number[];
  wyniki: number[];
  id: number;
  resultSum?: number;
  wynikiSum?: number;
}

export interface LeagueDetails {
  month: string;
  details: LeagueDetail[];
}

export interface QueueDetails {
  id: string;
  day: string;
  matchDay: string;
}

export interface QueueDetailsFirebase {
  id: string;
  host: string;
  guest: string;
  hostScore: number;
  guestScore: number;
  link: string;
  img: string;
  user: string;
}

export interface LeagueDataItem {
  league: string;
  season: string;
  leagueDetails: LeagueDetails[];
  queueDetails: QueueDetails[];
}
